const prisma = require("../db.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { email, password: hashed },
  });

  res.json({ id: user.id, email: user.email });
}

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: "Invalid login" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "Invalid login" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ token })
}
