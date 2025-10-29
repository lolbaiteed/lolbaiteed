import {randomBytes, scryptSync, timingSafeEqual} from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function hashPasswd(passwd) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(passwd, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPasswd(passwd, stored) {
  const [salt, hash] = stored?.split(":");
  const newHash = scryptSync(passwd, salt, 64).toString('hex');
  return timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(newHash, "hex"));
}

export function generateToken() {
    const token = randomBytes(16).toString('hex');
    return token
}

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
