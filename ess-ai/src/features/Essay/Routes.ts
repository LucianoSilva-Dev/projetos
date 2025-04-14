import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { EssaySchema } from './Schemas';
import { AddEntityWiseTags } from '../../shared/Utils';
import { EssayController } from './Controller';
import { authPlugin } from '../Auth/Plugins';

export const EssayRoutes: FastifyPluginAsyncZod = async (app) => {
  AddEntityWiseTags(app, ['Essay']);
  // used to enable reply.jwtSign for the handlers
  app.register(authPlugin);

  app.post('/grade', EssaySchema.grade, EssayController.grade);
};
