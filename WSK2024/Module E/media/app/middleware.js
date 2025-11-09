import { verifyPasswd, generateToken, dbError, validationError } from "./utils.js";
import { db } from "./db.js";

export async function validateToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    if (authHeader === undefined) {
      throw new validationError("token must be set")
    }
    if (!authHeader.startsWith("Bearer ")) {
      throw new validationError("Not valid token");
    }
    req.token = authHeader.split(" ")[1];
    next();

  } catch (error) {
    if (error instanceof validationError) {
      return res.status(401).json(error.message)
    }
  }
}

export async function adminLogin(req, res, next) {
  const authHeader = req.headers['authorization'];
  try {
    if (authHeader != undefined) {
      validateToken(req, res, next)
      const tokenFound = await db.query(`SELECT username FROM User WHERE token = ?`, [req.token])
      if (tokenFound.length === 0) {
        throw new dbError("User with this token not found");
      }
    } else {
      const { username, password } = req.body;
      if (password === undefined || username === undefined) {
        return res.redirect("/admin/login")
      }
      const [rows] = await db.query(`SELECT password FROM User WHERE username = ?`, [username]);
      const storedPassword = rows[0].password;
      const passMatch = verifyPasswd(password, storedPassword)
      if (!passMatch) {
        throw new validationError("Invalid password");
      }
      const token = generateToken();

      await db.query(`UPDATE User SET token = ? WHERE username = ?`, [token, username])
      res.set('Authorization', `Bearer ${token}`)
      next();
    }
  } catch (error) {
    if (error instanceof validationError) {
      res.status(401).json(error.message);
    } else if (error instanceof dbError) {
      next();
    }
  }
}

export async function checkIsAdminLoggedIn(req, res, next) {
  try {
    const [isLoggedIn] = await db.query(`SELECT username FROM User WHERE token = ?`, [req.token])
    if (isLoggedIn.length === 0) {
      throw new validationError;
    }
    next()
  } catch (error) {
    if (error instanceof Error) {
      return res.redirect("/admin/login")
    }
  }
}
