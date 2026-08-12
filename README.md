# Portfolio Traço Leal

Sistema web desenvolvido para gerenciamento e organização do portfólio interno da agência **Traço Leal Comunicação - LTDA**. Uma empresa sediada em Itajubá - MG, que há mais de 40 anos presta serviços para organizações públicas e privadas.

A aplicação permite centralizar informações sobre clientes, documentos, peças e seus respectivos arquivos, imagens e links, oferecendo uma interface administrativa para cadastro, edição, visualização e exclusão dos conteúdos.

O projeto foi desenvolvido como uma aplicação **full stack**, utilizando React no frontend e Node.js/Express no backend, com persistência dos dados em banco MySQL através do Prisma ORM.

Site da agência: https://www.tracoleal.com.br/

Instagram da agência: https://www.instagram.com/tracolealcomunicacao/

<br>

![Image](https://github.com/user-attachments/assets/4f9ecf18-dce1-4232-acb9-80a8b7240071)

<br>

![Image](https://github.com/user-attachments/assets/3b9989be-86be-4e9a-9933-ee03035ae700)

<br>

![Image](https://github.com/user-attachments/assets/fb8229b7-486d-4fb0-9bab-e3679d9402d8)

<br>

![Image](https://github.com/user-attachments/assets/2d9a92ca-5aaa-445d-b7a4-9bc4910bc794)

<br>

![Image](https://github.com/user-attachments/assets/b6926ec9-4ccf-48fb-84f4-617b900011e1)

## 📌 Sobre o projeto

O projeto surgiu da necessidade real de organizar, em um único sistema, os materiais produzidos pela agência. Anteriormente, informações como contratos, atestados, peças gráficas, imagens, arquivos e links poderiam ficar distribuídas em diferentes locais. A proposta do sistema é fornecer um ambiente centralizado para que os administradores possam cadastrar e consultar esses conteúdos de forma organizada.

## 🚀 Funcionalidades

### 📊 Dashboard

O sistema possui um dashboard administrativo com uma visão geral dos dados cadastrados.

Atualmente apresenta: total de clientes, total de contratos, total de atestados, total de peças e as últimas 10 atividades realizadas no sistema.

### 👥 Gerenciamento de clientes

Permite administrar os clientes cadastrados na plataforma. Funcionalidades:

* Listagem de clientes;
* Cadastro de clientes;
* Edição de clientes;
* Exclusão de clientes;
* Cadastro de logo;
* Informações como nome, site e descrição;
* Controle de situação do cliente.

O sistema também possui proteção contra exclusão indevida de clientes que possuem dados relacionados.

### 📄 Gerenciamento de documentos

Os documentos são organizados por cliente e podem ser classificados como Contratos ou Atestados. Funcionalidades:

* Cadastro de documentos;
* Edição;
* Exclusão;
* Upload de arquivos;
* Associação com clientes;
* Associação com categorias;
* Definição do ano;
* Controle de situação;
* Visualização dos arquivos cadastrados.

### 🎨 Gerenciamento de peças

O sistema permite cadastrar e administrar as peças produzidas pela agência. Cada peça pode possuir:

* Título;
* Slug;
* Descrição;
* Categoria;
* Ano;
* Cliente relacionado.

Além das informações principais, cada peça pode possuir diferentes tipos de conteúdo relacionados.

#### 🖼️ Imagens

É possível:

* Enviar imagens;
* Definir legenda;
* Definir imagem de destaque;
* Definir ordem;
* Visualizar miniaturas;
* Excluir imagens.

Os arquivos de imagem são armazenados no servidor e suas informações são registradas no banco de dados.

#### 🔗 Links

Cada peça pode possuir links associados. Funcionalidades:

* Cadastro de links;
* Edição;
* Exclusão;
* Título do link;
* URL;
* Associação com a peça.

#### 📁 Arquivos

Também é possível anexar arquivos diretamente às peças. Funcionalidades:

* Upload de arquivos (.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt ou .zip)
* Definição de título;
* Visualização dos arquivos cadastrados;
* Abertura do arquivo em uma nova aba;
* Exclusão de arquivos.

## 🔐 Autenticação

O sistema possui uma área administrativa protegida por autenticação. As operações que alteram dados, como cadastro, edição e exclusão, são protegidas através de autenticação baseada em token. Além disso, a aplicação utiliza diferentes perfis de usuário, incluindo `ADMIN` e `EDITOR`.

## 🛠️ Tecnologias utilizadas

### Frontend

* **React** — desenvolvimento da interface e dos componentes da aplicação.
* **Vite** — ambiente de desenvolvimento e build do frontend.
* **Tailwind CSS** — estilização e construção da interface.
* **Axios** — comunicação entre o frontend e a API.
* **React Router** — gerenciamento das rotas e páginas da aplicação.
* **Lucide React** — utilização de ícones na interface.

### Backend

* **Node.js** — execução do servidor e da aplicação backend.
* **Express** — criação da API REST e gerenciamento das rotas.
* **Prisma ORM** — modelagem e acesso ao banco de dados.
* **MySQL** — armazenamento dos dados da aplicação.
* **Multer** — recebimento e gerenciamento dos uploads de arquivos.
* **JWT** — autenticação e proteção das operações administrativas.
* **CORS** — controle da comunicação entre frontend e backend.

A arquitetura utiliza uma separação entre:

```text
Routes
   ↓
Controllers
   ↓
Services
   ↓
Prisma
   ↓
MySQL
```

### Banco de dados

O projeto utiliza **MySQL**, com o **Prisma ORM** para modelagem e acesso aos dados. Com relacionamentos entre clientes, documentos e peças, além dos conteúdos associados às peças.

## 👨‍💻 Autor

**Gustavo Totti Custódio dos Santos**
