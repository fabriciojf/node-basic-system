# Node.js Basic System

Proposta de um projeto base desenvolvido com Node.js e Pug. Este modelo é um estudo pessoal que contempla aplicação de conveções e style guides, além de uma visão pessoal dos serguintes aspectos:

  - Organização de pastas
  - Nomenclatura de arquivos
  - Proposta de Modelo DAO
  - Estudo de Classes
  - Estudo de login por webtoken com registro em Cookie, podendo ser alterado para integração via REST
  - Estudo de [Materialize.css](http://materializecss.com/)
  - Estudo de templates utilizando [PugJs](https://pugjs.org/api/getting-started.html)

### Recursos do Projeto

  - Cadastro de usuários  
  - Login
  - Logoff  

### Install

Requerimentos:

  - [Node.js](https://github.com/fabriciojf/tips/blob/master/nodeinstalls.md#installing-nodejs)
  - [Mongodb](https://github.com/fabriciojf/tips/blob/master/nodeinstalls.md#installing-mongodb---debian)
  - [nodemon](https://github.com/fabriciojf/tips/blob/master/nodeinstalls.md#suggested-global-packages)

Clone o projeto

```console
$ git clone https://github.com/fabriciojf/node-basic-system.git
$ cd nodechat
```

Instale os pacotes npm

```console
$ npm install
```

Execute o projeto

```console
$ nodemon server.js
```

Abra-o no navegador, para configurar uma porta diferente acesse o arquivo app/config/default-config.js

  - [http://localhost:3000/](http://localhost:3000)   

### Style Guide

  - [Node Style Guide](https://github.com/felixge/node-style-guide)
  - [Code Conventions for the JavaScript Programming Language](http://javascript.crockford.com/code.html)
  - [Pug Style Guide](https://pugjs.org/api/getting-started.html)


### Author

  - [Fabricio Costa](http://fabriciojf.com)