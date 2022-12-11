import { customAlphabet } from 'nanoid/non-secure'
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
export const uniqueID = customAlphabet(alphabet, 10)
