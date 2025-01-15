### CURSO - Rocketseat - NLW 17 - Pocket

#### Data: 09/09/2024 a 12/09/2024

##### Educator: Diego Fernandes

##### Developer: Josuel A. Lopes

#### About

Desenvolvimento acadêmico de uma aplicação front-end em React.js, conceitos de integração com API REST, para o gerenciamento metas pessoais diária de atividades e bem-estar com interação, com registro de metas e progresso semanal.

Utilizando as tecnologias:

- Vite
- React
- TypeScript,
- TanStack Query
- React hook form,
- Tailwind CSS,
- Lucide react,
- Radix
- Biome,
- ZOD
- Dayjs

<br/>

#### Projeto: in.orbit - Rocketseat NLW17 Pocket React

![iorbit_web_01](https://github.com/user-attachments/assets/44419eb0-2292-4e9e-a28f-c6f96c090376)

</br>

#### 📋 Sumário

---

- [📋 Sumário](#-sumário)
- [📂 Arquitetura e diretórios](#-arquitetura-e-diretórios)
- [📦 Pacotes](#-pacotes)
- [🧰 Dependências](#-dependências)
- [♻️ Variáveis de Ambiente](#-variáveis-de-ambiente)
- [🔥 Como executar](#-como-executar)
- [📑 Padronização](#-padronização)
- [🧪 Testes](#-testes)
- [⚙️ CI/CD](#-CI/CD)
- [🚀 Build](#-build)
- [🔖 Version](#-version)
- [📜 Licença](#-licença)

<br/>

#### 📂 Arquitetura e diretórios

---

- MVC (Model View Controller)

```txt
  📦 root
  ┣ 📂 web
  ┃ ┣ 📂 .vscode
  ┃ ┃ ┗ 📜 settings.json
  ┃ ┣ 📂 public
  ┃ ┃ ┗ 📜 icon.svg
  ┃ ┣ 📂 src
  ┃ ┃ ┣ 📂 assets
  ┃ ┃ ┃ ┣ 📜 lets-start-illustration.svg
  ┃ ┃ ┃ ┗ 📜 logo-in-orbit.svg
  ┃ ┃ ┣ 📂 components
  ┃ ┃ ┃ ┣ 📂 ui 
  ┃ ┃ ┃ ┃ ┣ 📜 button.tsx 
  ┃ ┃ ┃ ┃ ┣ 📜 dialog.tsx 
  ┃ ┃ ┃ ┃ ┣ 📜 input.tsx 
  ┃ ┃ ┃ ┃ ┣ 📜 label.tsx 
  ┃ ┃ ┃ ┃ ┣ 📜 outline-button.tsx 
  ┃ ┃ ┃ ┃ ┣ 📜 progress-bar.tsx 
  ┃ ┃ ┃ ┃ ┣ 📜 radio-group.tsx 
  ┃ ┃ ┃ ┃ ┗ 📜 separator.tsx 
  ┃ ┃ ┃ ┣ 📜 create-goal.tsx 
  ┃ ┃ ┃ ┣ 📜 empty-goal.tsx 
  ┃ ┃ ┃ ┣ 📜 in-orbit-icon.tsx 
  ┃ ┃ ┃ ┣ 📜 pending-goals.tsx 
  ┃ ┃ ┃ ┗ 📜 summary.tsx 
  ┃ ┃ ┣ 📂 http
  ┃ ┃ ┃ ┣ 📜 create-goal-completion.ts 
  ┃ ┃ ┃ ┣ 📜 create-goal.ts
  ┃ ┃ ┃ ┣ 📜 get-pending-goal.ts 
  ┃ ┃ ┃ ┗ 📜 get-summary.ts
  ┃ ┃ ┣ 📜 app.tsx
  ┃ ┃ ┣ 📜 index.tsx
  ┃ ┃ ┗ 📜 main.tsx
  ┃ ┣ 📜 .gitignore
  ┃ ┣ 📜 biome.json
  ┃ ┣ 📜 index.html
  ┃ ┣ 📜 package-lock.json
  ┃ ┣ 📜 package.json
  ┃ ┣ 📜 postcss.config.js
  ┃ ┣ 📜 tailwind.config.json
  ┃ ┣ 📜 tsconfig.app.json
  ┃ ┣ 📜 tsconfig.json
  ┃ ┣ 📜 tsconfig.node.json
  ┃ ┗ 📜 vite.config.ts
  ┗ 📜 README.md

```

<br/>

#### 📦 Pacotes

---

<br/>

#### 🧰 Dependências

---

- Baixar projeto back-end
> Necessário para rodar aplicação e buscar, listar e cadastrar novos dados.
> Para executar o back-end seguir documentação do projeto link abaixo:  

- [💻 Back-end server](https://github.com/josuellions/rocketseat_nlw17_pocket_nodejs_orbit) - projeto server

<br/>

#### ♻️ Variáveis de Ambiente

---

- Certifique-se de ter configurado o arquivo `.env` ou `.env.development` na raiz do projeto baseado no arquivo `.env.example`, com as variáveis de ambiente necessárias para execução do projeto.

- Caso você não tenha acesso aos valores, solicite ao responsável pelo projeto.

<br/>

#### 🔥 Como executar

---

- Realize o clone ou baixe o projeto localmente.

- - Instalar ou atualizar os pacotes e dependências

```bash
npm install
```

- - Para executar o projeto em modo de desenvolvimento.

```bash
npm run dev
```

- - Para executar o projeto em modo de produção e homologação.

```bash
npm run start
```

<br/>

#### 📑 Padronização

---

<br/>

#### 🧪 Testes

---

<br/>

#### ⚙️ CI/CD

---

<br/>

#### 🚀 Build

---

Para gerar o build do projeto deve-se abrir no `Visual Code` gerando os arquivos e build da aplicação

```bash
npm build
```

<br/>

#### 🔖 Version

---

- Padronização da estrutura de versionamento

<br/>

#### 📜 Licença

---

Este repositório e projeto possui licença `MIT license`, para maiores informações:
