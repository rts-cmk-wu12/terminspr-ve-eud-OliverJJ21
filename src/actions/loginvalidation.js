// Taget fra tidligere projekt

"use server";

import z from "zod";

export default async function LoginValidation(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    const schema = z.object({
        username: z.string().min(1, { message: "Brugernavn skal være udfyldt!" }),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt!" })
    });

    const validated = schema.safeParse({
        username, password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    return validated
}