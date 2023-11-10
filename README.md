# README do Projeto

Este projeto é uma aplicação web construída utilizando Vite, React, Style Dictionary e Jest. Ele foi desenvolvido para proporcionar um ambiente eficiente de desenvolvimento, testes e construção. Abaixo estão os comandos disponíveis para gerenciar o projeto:

### Comandos

#### 1. Desenvolvimento

```bash
npm run dev
```

Este comando inicia o servidor de desenvolvimento usando o Vite, proporcionando um ambiente de desenvolvimento rápido e otimizado.

#### 2. Construção

```bash
npm run build
```

Este comando transpila arquivos TypeScript usando o TypeScript (tsc) e, em seguida, constrói o projeto com o Vite, criando uma versão pronta para produção.

#### 3. Linting

```bash
npm run lint
```

Este comando utiliza o ESLint para fazer a verificação de código em arquivos TypeScript e TypeScript React, garantindo qualidade de código e aderência aos padrões de codificação.

#### 4. Visualização

```bash
npm run preview
```

Inicia um servidor de pré-visualização para analisar a versão de produção antes da implantação.

#### 5. Construir Estilos

```bash
npm run build:styles
```

Executa o Style Dictionary para construir tokens de design com base na configuração fornecida em `./style-dictionary/config.json`.

#### 6. Testes

```bash
npm test
```

Executa o Jest em modo de observação, permitindo testes interativos e iterativos de seus componentes e funções.

#### 7. Storybook

```bash
npm run storybook
```

Inicia o servidor de desenvolvimento do Storybook, permitindo construir e testar componentes React de forma isolada.

#### 8. Construir Storybook

```bash
npm run build-storybook
```

Cria uma versão pronta para produção do seu Storybook, útil para mostrar e compartilhar seus componentes.

### Decisões técnicas

- Inicialmente, considerava usar Tailwind, mas ao perceber a necessidade de importar manualmente configurações após gerar variáveis CSS, optei por Styled Components com React. Essa escolha proporciona estilos encapsulados em componentes, favorecendo reutilização, manutenção simplificada e dinâmica de estilos baseada em props. Sua integração harmoniosa com a lógica React promove modularidade e simplifica o desenvolvimento.

### Informações Adicionais

- O projeto está configurado com o Vite para uma experiência de desenvolvimento rápida e moderna.
- TypeScript é utilizado para verificação de tipo e ferramentas de desenvolvimento aprimoradas.
- O ESLint está configurado para garantir qualidade de código e manutenibilidade.
- Style Dictionary é usado para construir um sistema de tokens de design, aprimorando a consistência nos estilos.
- Jest é o framework de teste escolhido, proporcionando um ambiente robusto e flexível de testes.
- Storybook está incluído para o desenvolvimento e teste orientado por componentes.

### Loom

https://www.loom.com/share/91c67b02e2c8409280bbc35c70b13c27
