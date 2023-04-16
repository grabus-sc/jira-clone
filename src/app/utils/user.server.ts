import bcrypt from "bcryptjs";
import type { RegisterForm } from "./types.server";
import { db } from "@infrastructure/db/db.server";

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = await db.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      firstName: user.firstName,
      lastName: user.lastName,
      name: user.firstName + " " + user.lastName,
      color: user.color,
    },
  });
  return { id: newUser.id, email: user.email };
};
