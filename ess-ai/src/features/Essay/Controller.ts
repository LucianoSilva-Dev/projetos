import type { Controller } from '../../shared/Types';
import type { GradeEssayBody } from './Types';
import { EssayService } from './Service';

// useChat()

export const EssayController: Controller = {
  grade: async (request, reply) => {
    const response = await EssayService.grade(request.body as GradeEssayBody);
    if(!response.success) {
      return reply.status(response.statusCode as number).send({
        errors: response.errors as string[],
      });
    }

    return reply.status(200).send({
      competencias: response.competencias,
      nota_total: response.nota_total,
      sugestoes: response.sugestoes,
    });
  },
};

// 
