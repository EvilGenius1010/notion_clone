import { BufferSource } from "node:stream/web";

// Convert a string to an ArrayBuffer
function stringToArrayBuffer(str: string) {
  return new TextEncoder().encode(str);
}

// Convert an ArrayBuffer to a string
function arrayBufferToString(buffer: any) {
  return new TextDecoder().decode(buffer);
}

// Generate an AES-CTR key
export async function generateAESKey() {
  return await crypto.subtle.generateKey(
    {
      name: "AES-CTR",
      length: 256, // can be 128, 192, or 256
    },
    true, // extractable key
    ["encrypt", "decrypt"]
  );
}

// Encrypt function
async function encryptAESCTR(key: CryptoKey, plaintext: string) {
  const iv = crypto.getRandomValues(new Uint8Array(16)); // Initialization vector (IV) must be 16 bytes
  const encodedPlaintext = stringToArrayBuffer(plaintext);

  const ciphertext = await crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter: iv,
      length: 64, // CTR counter length, commonly 64 bits
    },
    key,
    encodedPlaintext
  );

  return { ciphertext, iv }; // Return both ciphertext and IV for later decryption
}

// Decrypt function
async function decryptAESCTR(key: CryptoKey, ciphertext: BufferSource, iv: BufferSource) {
  const decryptedBuffer = await crypto.subtle.decrypt(
    {
      name: "AES-CTR",
      counter: iv,
      length: 64,
    },
    key,
    ciphertext
  );

  return arrayBufferToString(decryptedBuffer); // Convert ArrayBuffer back to string
}



async function checkAndEncryptData(data: string) {
  //logic to check for existence of secretkey at a partircular place and if not, generate one


}
