import z from "zod";

export const signUpSchema = z.object({
  username: z.string().min(1, "please enter valid user name"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password should be at least 6 characters"),
});

export type signUpType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password should be at least 6 characters"),
});

export type signInType = z.infer<typeof signInSchema>;
