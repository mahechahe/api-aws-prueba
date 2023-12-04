import { hash, compare } from "bcryptjs";

export const encrypt = async (pass: string) => {
  const salt = 8;
  const passwordHash = await hash(pass, salt);

  return passwordHash;
};

export const verified = async (pass: string, passwordHash: string) => {
    const isCorrect = compare(pass, passwordHash)
    return isCorrect
};
