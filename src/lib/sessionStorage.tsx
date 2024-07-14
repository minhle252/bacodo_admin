"use server";
import { cookies } from "next/headers";
import Cryptr from "cryptr";

const cryptr = new Cryptr("myTotallySecretKey", {
  encoding: "base64",
  pbkdf2Iterations: 10000,
  saltLength: 10,
});

export async function setSessionData(name: string, sessionData: string) {
  const encryptedSessionData = cryptr.encrypt(sessionData); // Encrypt your session data
  cookies().set(name, encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
  // Redirect or handle the response after setting the cookie
}
export async function getSessionData(req: string) {
    const encryptedSessionData = cookies().get(req)?.value;
  return encryptedSessionData ? cryptr.decrypt(encryptedSessionData) : null;
  // return encryptedSessionData || null;
}
