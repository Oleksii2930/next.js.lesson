import Joi from "joi";

export const carSchema = Joi.object({
    brand: Joi.string()
        .min(2)
        .max(30)
        .required()
        .messages({
            "string.empty": "Brand is required",
            "string.min": "Minimum 2 characters",
        }),

    price: Joi.number()
        .min(1)
        .required()
        .messages({
            "number.base": "Price must be a number",
            "number.min": "Price must be greater than 0",
        }),

    year: Joi.number()
        .min(1900)
        .max(2026)
        .required()
        .messages({
            "number.min": "Year must be >= 1900",
            "number.max": "Year must be <= 2026",
        }),
});

export type CarFormData = {
    brand: string;
    price: number;
    year: number;
};