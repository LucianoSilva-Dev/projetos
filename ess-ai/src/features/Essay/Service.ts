import type { GradeEssayBody } from './Types';
import { createPrompt } from './Prompt';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../../shared/Env';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export const EssayService = {
  grade: async (body: GradeEssayBody) => {
    const { essay, topic } = body;
    const prompt = createPrompt(essay, topic);

    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    console.log(`estatistica de uso de recursos da resposta:\n\n${response.usage}`);
    
    const responseText = response.choices[0].message.content;
    const responseObj = responseText ? JSON.parse(responseText) : null;

    if(!responseObj) {
      return {
        success: false,
        statusCode: 500,
        error: 'Erro inesperado ao analisar a redação',
      };
    }

    if (!responseObj.success) {
      return {
        success: false,
        statusCode: 400,
        errors: responseObj.errors as string[],
      };
    }

    return {
      success: true,
      competencias: responseObj.competencias,
      nota_total: responseObj.nota_total,
      sugestoes: responseObj.sugestoes,
    };
  },
};
