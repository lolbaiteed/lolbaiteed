const { NextFunction, Request, Response } = require('express');
const db = require('./db.js');

function validateHash(password, stored, name) {
  stored = db.query(`SELECT password FROM Users WHERE name=${name}`)
  password
}

function loginValidate(req, res, next) {
  const { name, password } = Request.body;


}
