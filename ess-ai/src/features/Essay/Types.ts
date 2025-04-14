import type z from 'zod';
import type { gradeEssayBodyValidation } from './Validations';

export type GradeEssayBody = z.infer<typeof gradeEssayBodyValidation>;
