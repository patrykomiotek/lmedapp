import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email("E-mail is invalid"),
  password: z
    .string()
    .min(3, "Password length must contain at least 3 characters"),
  language: z
    .string()
    .min(2, "At least 2 characters")
    .optional()
    .or(z.literal("")),
});

export type CreateUserDto = z.infer<typeof validationSchema>;

// request -> API
// data -> parse
// data -> UI

// validationSchema.parse(data) // throw
// validationSchema.safeParse(data) //
