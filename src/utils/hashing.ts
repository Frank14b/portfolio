"use server";

const bcrypt = require("bcrypt");

// Function to hash a string with salting
async function hashStringAsync(text: string) {
  const saltRounds = 16; // Adjust as needed (higher for more security)
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(text, salt);
  return {
    hash,
    salt,
  };
}

// Function to compare a provided password with a stored hash
async function compareHashedStringAsync(
  providedString: string,
  storedHash: string
) {
  return await bcrypt.compare(providedString, storedHash);
}

export { hashStringAsync, compareHashedStringAsync };
