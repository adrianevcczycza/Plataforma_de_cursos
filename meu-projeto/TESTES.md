# Relatório de testes

## Rotina executada

1. Instalação das dependências com `npm install`.
2. Análise estática com `npm run lint`.
3. Compilação de produção com `npm run build`.
4. Verificação das rotas `/`, `/sobre` e `/cursos/[id]`.
5. Conferência do consumo da API e da contingência para indisponibilidade.
6. Conferência do filtro de categoria `Cursos` antes da renderização.
7. Conferência dos links, imagens, conteúdo responsivo e página 404.
8. Conferência de `.gitignore`, ausência de segredos e arquivos gerados.

## Resultado

- `npm run lint`: aprovado, sem erros ou avisos.
- `npm run build`: aprovado; `/` e `/sobre` foram pré-renderizadas e `/cursos/[id]` foi reconhecida como rota dinâmica.
- Requisições HTTP locais: `/`, `/sobre` e `/cursos/ev_41f8aa5d` responderam `200`; identificador inexistente respondeu `404`.
- API: integração configurada com revalidação e normalização; o serviço público apresentou *cold start* durante a validação e a contingência local foi exibida corretamente.
- Filtro: aplicado antes do `map`, comparando a categoria normalizada com `Cursos`.
- Navegação: os cards usam o identificador do item na URL e a página dinâmica busca o curso correspondente.

A inspeção visual automatizada não pôde ser executada porque não havia navegador conectado ao ambiente de testes. A estrutura responsiva foi conferida no código e as respostas HTML das rotas foram validadas.
