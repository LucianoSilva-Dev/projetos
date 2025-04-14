import z from 'zod';

export const gradeEssayBodyValidation = z.object({
  essay: z
    .string({
      required_error: 'o campo redação é obrigatório',
      invalid_type_error: 'o campo redação precisa ser um texto.',
    })
    .min(150, 'a redação precisa ter pelo menos 150 caracteres.')
    .max(4000, 'a redação não pode ter mais de 4000 caracteres'),
  topic: z
    .string({
      required_error: 'o campo tópico é obrigatório',
      invalid_type_error: 'o campo tópico precisa ser um texto.',
    })
    .max(100, 'o tópico não pode ter mais de 100 caracteres'),
});
