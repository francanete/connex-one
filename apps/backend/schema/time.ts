import joi from "joi";

export const timeSchema = joi.object({
  epoch: joi
    .number()
    .required()
    .description(
      "The current server time, in epoch seconds, at time of processing the request."
    ),
});
