# 🚀 Fastify REST API Template

Template de API REST com estrutura baseada em funcionalidades (**feature-based design**).

## ✨ Tecnologias Utilizadas

<div align="center">
  
  [![Fastify](https://img.shields.io/badge/Fastify-20232a?style=for-the-badge&logo=fastify&logoColor=white)](https://www.fastify.io/)
[![Zod](https://img.shields.io/badge/Zod-3178c6?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Mongoose](https://img.shields.io/badge/Mongoose-4EA94B?style=for-the-badge&logo=mongoose&logoColor=white)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

</div>

## 📁 Estrutura de Pastas

```
src
├── app.ts                         # Reúne todas as rotas e configurações do app
├── server.ts                      # Conecta ao banco de dados e inicializa a API
├── config/                        # Configurações globais do projeto
│   ├── app.ts                     # Configurações gerais da aplicação
│   ├── cors.ts                    # Configurações de CORS
│   └── docs.ts                    # Configuração da documentação
├── features/                      # Funcionalidades organizadas por domínio
│   └── Auth/                      # Módulo de autenticação
│       ├── Controller.ts          # Handlers das rotas
│       ├── Model.ts               # Modelo de dados (MongoDB)
│       ├── Plugins.ts             # Plugins específicos da feature
│       ├── Routes.ts              # Definições de rotas da API para esse domínio
│       ├── Schemas.ts             # Schemas com validações Zod para validação de req/res de cada rota
│       ├── Service.ts             # Regras de negócio da feature
│       ├── Types.ts               # Tipagens específicas da feature
│       └── Validations.ts         # Modelos Zod para validação de dados
└── shared/                        # Código compartilhado entre features
    ├── Env.ts                     # Leitura e tratamento das variáveis de ambiente
    ├── Errors.ts                  # Classes e tipos de erros
    ├── Schemas.ts                 # Schemas reutilizáveis
    ├── Types.ts                   # Tipagens globais
    ├── Utils.ts                   # Funções utilitárias globais
    ├── Validations.ts             # Validações genéricas
    └── plugins/                   # Plugins reutilizáveis do Fastify
        ├── appErrorHandler.ts     # Middleware de tratamento de erros da aplicação
        └── schemaErrorFormater.ts # Formatação de erros de schema
```
