// zod schemas for validation and response of the routes
import type { EntitySchema } from '../../shared/Types';
import { genericError, schemaValidationError } from '../../shared/Schemas';
import z from 'zod';
import { gradeEssayBodyValidation } from './Validations';
import { authMiddleware } from '../Auth/Plugins';

const competenciaObject = z.object({
  nota: z.number().min(0).max(200),
  justificativa: z.string(),
});

export const gradeResponse = z.object({
  competencias: z.object({
    competencia_1: competenciaObject,
    competencia_2: competenciaObject,
    competencia_3: competenciaObject,
    competencia_4: competenciaObject,
    competencia_5: competenciaObject,
  }),
  nota_total: z.number().min(0).max(1000),
  sugestoes: z.object({
    competencia_1: z.string(),
    competencia_2: z.string(),
    competencia_3: z.string(),
    competencia_4: z.string(),
    competencia_5: z.string(),
  }),
});

export const EssaySchema: EntitySchema = {
  grade: {
    preHandler: authMiddleware,
    schema: {
      security: [{ jwtAuth: [] }],
      body: gradeEssayBodyValidation,
      response: {
        200: gradeResponse,
        400: schemaValidationError,
        401: genericError,
        500: genericError,
      },
      summary: 'Get the JWT token',
    },
  },
};
