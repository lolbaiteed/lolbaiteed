import crypto from 'crypto';

/**
 * Function to create a hash from password
 * @param {String} password - password from request 
 * @returns String which contains password and salt to decrypt
 */
export function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(password, salt, 32).toString('hex');
    return `${salt}:${hash}`;
}

/**
 * Function to compare a password from request with password from db
 * @param {String} password - password from request
 * @param {String} stored - stored password & salt string from db
 * @returns true if passwords match, otherwise false
 */
export function verifyPassword(password, stored) {
    const [salt, hash] = stored?.split(":");
    const newHash = crypto.scryptSync(password, salt, 32).toString('hex');
    return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(newHash, "hex"));
}