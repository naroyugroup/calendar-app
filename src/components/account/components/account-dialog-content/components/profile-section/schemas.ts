import { nameSchema } from "@/schemas";
import { z } from "zod";

export const changeNameSchema = z.object({
	name: nameSchema,
});
