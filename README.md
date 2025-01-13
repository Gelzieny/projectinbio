<p align="center">
  <a href="#">
    🔗 <img src="https://raw.githubusercontent.com/Gelzieny/projectinbio/bc65da43f5a148b600a4e15bbd388c5784acbf50/.github/img/logo.svg"  alt="Logo project inbio" />
  </a>
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-descricao">Descrição</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

<p align="justify"></p>

## ⚙️ Descrição

<p align="justify"></p>

## 🎨 Layout

O layout da aplicação está disponível no [Figma](https://www.figma.com/design/nyYXKhuL54nnMuvOArgVzq/Project-in-bio-(Community)-(Copy)?node-id=0-1&p=f&t=qp5NPIH2ut9UBXgx-0)


## 🛠 Tecnologias

<p align="justify">Este projeto utiliza um conjunto de tecnologias modernas para garantir uma aplicação eficiente e escalável, incluindo:</p>

- ⚛️ **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- ⏭️ **[Next.js](https://nextjs.org/)**: Ferramenta de build rápida para desenvolvimento frontend.
- 🎨 **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização.
- 🔐 **[Auth.js](https://authjs.dev/)**: Autenticação para a Web.
- ⚡ **[Firebase](https://firebase.google.com/)**: É uma plataforma de desenvolvimento de aplicativos móveis e web fornecida pelo Google.

## 🚀 Como executar o projeto

### Pré-requisitos

<p align="justify">Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:</p>

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=git,nodejs,vscode" />
</a>

### 🖥️ Clone o repositório

```bash
# Clone este repositório
$ git clone <https://github.com/Gelzieny/projectinbio.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd projectinbio

# Instale as dependências
$ npm install
```
### ⚡ Configuração do Firebase

- Crie um projeto no [Firebase Console](https://firebase.google.com/)
- Adicione as credenciais do Firebase ao seu projeto:
  - Crie uma chave de API para autenticação.
  - Configure o Firestore e o Storage para armazenar dados e arquivos.
  - Habilite o Firebase Authentication (e outros serviços conforme necessário).


### ✨ Configuração do Auth.js com Google

Crie um projeto no [Google OAuth Configuration](https://console.developers.google.com/apis/credentials).

- Crie um novo projeto ou selecione um projeto existente.
- Habilite a API de **Google OAuth** e configure as credenciais de OAuth.
- Crie um **Client ID** e **Client Secret** para OAuth 2.0.
- Adicione a URL de redirecionamento fornecida pelo Auth.js, por exemplo: `http://localhost:3000/api/auth/callback/google`.

### 🛡️ Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias:

````bash

# Firebase
FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY_BASE64
FIREBASE_STORAGE_BUCKET

# Google
AUTH_GOOGLE_ID
AUTH_GOOGLE_SECRET

# Auth (acessar a url <https://www.uuidgenerator.net/#google_vignette> gerar um id)
AUTH_SECRET
````

### 🟢 Rodando o projeto localmente

```bash
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

# 🧑🏻‍💻 Autor

Feito com ❤️ por Gelzieny R. Martins 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gelzieny-r-martins-180551106/)

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).