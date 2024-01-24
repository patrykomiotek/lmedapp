import { z } from "zod";

export const validationSchema = z.object({
  title: z.string().min(1, "Product title is required"),
  price: z.number().min(10, "Price must be at least 10 PLN"),
  description: z
    .string()
    .min(3, "At least 3 characters")
    .optional()
    .or(z.literal("")),
});

export type CreateProductDto = z.infer<typeof validationSchema>;
