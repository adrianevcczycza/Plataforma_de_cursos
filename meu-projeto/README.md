# WEG Academy

Aplicação Front-End em Next.js que migra a interface HTML da WEG Academy. A página inicial consome a API pública de eventos, filtra a categoria `Cursos` e cria os cards dinamicamente. Cada card leva a uma rota dinâmica de detalhes.

## Tecnologias

- Next.js 16 (App Router), React 19 e TypeScript
- Tailwind CSS 4
- `next/image` e `next/font`

## Como executar

Requisitos: Node.js 20.9 ou superior e npm.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). Para validar a versão de produção:

```bash
npm run lint
npm run build
npm start
```

## Rotas

- `/`: apresentação e listagem dinâmica dos cursos
- `/cursos/[id]`: detalhes do curso selecionado
- `/sobre`: página institucional estática

## API e resiliência

Por padrão, a aplicação consulta `https://dynamic-events-api.onrender.com/api/eventos`. O endereço pode ser substituído localmente:

```env
EVENTS_API_URL=https://seu-endpoint.exemplo/api/eventos
```

O arquivo `.env.local` não deve ser versionado. Como o serviço público gratuito pode entrar em *cold start*, existe um conjunto local de contingência fora do JSX para manter a interface avaliável quando a API estiver temporariamente indisponível. A tentativa de consumo da API ocorre primeiro e usa revalidação de 5 minutos.

Consulte [TESTES.md](./TESTES.md) para a rotina e os resultados de validação.
