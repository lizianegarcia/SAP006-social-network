# Criando uma Rede Social

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios de aceitação mínimos do projeto](#5-criterios-de-aceitação-mínimos-do-projeto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Entrega](#7-entrega)
- [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)

---

## 1. Prefácio

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. As redes sociais
invadiram nossas vidas. Nós as amamos ou odiamos, e muitas pessoas não conseguem
viver sem elas.

Há redes sociais de todo tipo para todos os tipos de interesse. Por exemplo: em
uma rodada de financiamento com investidores, foi apresentada uma rede social
para químicos onde os usuários podem publicar artigos a respeito de suas
pesquisas, comentar os artigos de seus colegas e filtrar artigos de acordo com
determinadas tags ou popularidade, mais recente ou mais comentado.

## 2. Resumo do projeto

Neste projeto você construirá uma Rede Social sobre o que você e sua equipe
decidirem. Pode ser, por exemplo, sobre alimentação saudável, feminismo,
educação, saúde, energias renováveis, amantes das
[Empanadas](https://pt.wikipedia.org/wiki/Empanada), de
[Tacos](<https://pt.wikipedia.org/wiki/Taco_(culin%C3%A1ria)>), de
[Feijoada](https://pt.wikipedia.org/wiki/Feijoada), ou do que seja.

Sua Rede Social terá que permitir à qualquer usuário criar uma conta de acesso,
logar-se com ela, criar, editar, deletar e dar _likes_ em publicações.

## 3. Objetivos de aprendizagem

O objetivo principal de aprendizagem deste projeto é construir uma [Single-page
Application
(SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
[_responsiva_](../../topics/css/02-responsive) (com mais de uma tela/ página) na
qual seja possível **ler e escrever dados.**

### HTML e CSS

- [ ] [HTML
      semântico](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica)
- [ ] [CSS `flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM e Web APIs

- [ ] [Manipulação do
      DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
- [ ] [History
      API](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)
- [ ]
  [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Javascript

- [ ] [Uso de
      callbacks](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
- [ ] [Consumo de
      Promises](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
- [ ] Uso de ES modules
      ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      |
      [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))

### Firebase

- [ ] [Firestore](https://firebase.google.com/docs/firestore)
- [ ] [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
- [ ] [Firebase security rules](https://firebase.google.com/docs/rules)
- [ ] [Uso de
      onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen) |
      [onAuthStateChanged](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)

### Testing

- [ ] [Teste unitários](https://jestjs.io/docs/pt-BR/getting-started)
- [ ] [Testes assíncronos](https://jestjs.io/docs/pt-BR/asynchronous)
- [ ] [Mocking](https://jestjs.io/docs/pt-BR/manual-mocks)

### Git e Github

- [ ] [Colaboração pelo Github](https://docs.github.com/pt/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
- [ ] [Organização pelo Github](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)

### Boas práticas de programação

- [ ] Modularização
- [ ] Nomenclatura / Semântica
- [ ] Linting

---

## 4. Considerações gerais

- Este projeto deve ser desenvolvido em trios.

- A lógica do projeto deve estar implementada completamente em JavaScript
  (ES6+), HTML e CSS 😃. Para este projeto **não está permitido** o uso de
  _frameworks_ ou bibliotecas de CSS e JS.

- A divisão e organização do trabalho deve permitir, sem exceção, que **cada
  integrante** da equipe pratique a aprendizagem de tudo que está envolvido em
  **cada história**. _Não dividam o trabalho como em uma fábrica._

- Está avançando em seus projetos com alguma fluidez e sem grandes problemas?
  Seja generosa com suas parceiras, deixe-as aprender e praticar sem restrições,
  mesmo que demore um pouco mais. Aproveite para _mentorá-las_, para fazer _pair
  programming_. Uma das melhores formas de aprender é explicar verbalmente.

- Está sentindo dificuldade e para você é mais difícil de avançar? Não fique com
  as partes "fáceis" do projeto. Converse, negocie, busque sua oportunidade de
  praticar e aprender o que é mais difícil para você.

- Vocês apenas poderão trabalhar em uma história por vez. Não avancem para a
  próxima sem completar a anterior. As histórias apenas são concluídas quando se
  completam **todos** os critérios de aceitação + **toda** sua definição de
  pronto.

## 5. Critérios de aceitação mínimos do projeto

### 5.1 Boilerplate

Este projeto não inclui um _boilerplate_, portanto você terá que definir a
estrutura de pastas e escrever seus próprios testes unitários (_tests_). Para
isso, você pode guiar-se por meio de projetos anteriores.

### 5.2 Definição do produto

No `README.md`, conte-nos brevemente como você mapeou as necessidades dos seus
usuários e como você chegou à definição final do seu produto. É importante que
detalhe:

- Quem são os principais usuários do produto.
- Qual problema o produto resolve/para que ele serve para esses usuários.

### 5.3 Histórias de usuário

Depois de entender as necessidades de seus usuários, escreva as Histórias de
Usuário. Elas representam tudo o que ele precisa fazer/ver na Rede Social. Cada
uma de suas histórias de usuário deve possuir:

- **Critérios de aceitação:** tudo o que deve acontecer para satisfazer as
  necessidades do usuário.

- **Definição de pronto:** todos os aspectos técnicos que devem ser atendidos
  para que, como equipe, saibam que essa história está finalizada e pronta para
  ser publicada. **Todas** suas histórias de usuário (com exceções), devem
  incluir esses aspectos em sua definição de pronto (além de tudo o que precisa
  adicionar):

  - Ser uma SPA.
  - Ser _responsivo_.
  - Receber _code review_ de pelo menos uma parceira de outra equipe.
  - Fazer _tests_ unitários.
  - Fazer testes manuais buscando erros e imperfeições simples.
  - Fazer testes de usabilidade e incorporar o _feedback_ dos usuários como
    melhorias.
  - Fazer deploy do aplicativo e marcar a versão (git tag).

### 5.4 Desenho da Interface de Usuário (protótipo de baixa fidelidade)

Você deve definir qual será o fluxo que o usuário seguirá dentro do seu
aplicativo e, com isso, criar a interface do usuário (UI) que siga este fluxo.

### 5.5 Responsivo

Deve funcionar bem em dispositivos de tela grande (computadores, laptops etc.) e
pequena (_tablets_, telefones celulares etc.). Sugerimos seguir a técnica
_`mobile first`_ (mais detalhes sobre essa técnica ao final).

### 5.6 Considerações sobre o comportamento da Interface do Usuário (UI)

Essas considerações ajudarão você a escrever as definições de pronto de sua
H.U.:

#### Criação e login de conta de usuário

- _Login_ com Firebase:
  - Para o _login_ e postagens na timeline, você pode usar o
    [Firebase](https://firebase.google.com/products/database/)
  - O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de
    e-mail e senha e também com uma conta do Google.
- Validações:
  - Somente usuários com contas válidas têm acesso permitido.
  - Não haver usuários repetidos.
  - A conta do usuário deve ser um email válido.
  - O que o usuário digita no campo de senha (_input_) deve ser secreto.
- Comportamento:
  - Quando o formulário de registro ou login é enviado, ele deve ser validado.
  - Se houver erros, mensagens descritivas devem ser exibidas para ajudar o
    usuário.

#### Timeline/linha do tempo

- Validações:
  - Ao publicar, deve ser validado se há conteúdo no _input_.
- Comportamento:
  - Ao recarregar o aplicativo, é necessário verificar se o usuário está
    _logado_ antes de exibir o conteúdo,
  - Conseguir publicar um _post_.
  - Poder dar e remover _likes_ em uma publicação. Máximo de um por usuário.
  - Visualizar contagem de _likes_.
  - Poder excluir uma postagem específica.
  - Solicitar confirmação antes de excluir um _post_.
  - Ao clicar em editar um _post_, você deve alterar o texto para um _input_ que
    permite editar o texto e salvar as alterações.
  - Ao salvar as alterações, você deve voltar ao texto normal, mas com a
    informação editada.
  - Ao recarregar a página, poder ver os textos editados.

### 5.7 Considerações técnicas sobre front-end

- Separar a manipulação do DOM da lógica (separação de responsabilidades).
- Ter várias telas. Para isso, seu aplicativo deve ser um [Single Page
  Application
  (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
- Alterar e persistir dados. Os dados que você adiciona ou modifica devem
  persistir por todo o aplicativo. Recomendamos que você use o
  [Firebase](https://firebase.google.com/) para isso também.

#### Testes unitários

- Lembre-se de que não há _setup_ de **testes** definido, isso dependerá da
  estrutura do seu projeto. Você não deve esquecer de pensar sobre os testes.
  Eles podem ajudar a definir a estrutura e sua lógica.

- Os testes de unidade devem cobrir no mínimo 70% de _statements_, _functions_,
  _lines_ e _branches_.

### 5.8 Considerações técnicas UX

- Faça pelo menos 2 entrevistas com os usuários.
- Faça um protótipo de baixa fidelidade.
- Verifique se a implementação do código segue as diretrizes do protótipo.
- Faça sessões de teste de usabilidade com o produto em HTML.

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se **você terminou** e
cumpriu todos os requisitos acima e sobrou tempo, tente concluí-las. Dessa
forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem do
projeto.

- Criar posts com imagens.
- Procurar usuários, adicionar e excluir "amigos".
- Definir a privacidade de _posts_ (público ou apenas para amigos).
- Permitir ver na linha do tempo de usuários "não amigos" apenas os posts
  públicos.
- Permitir comentar ou responder a uma postagem.
- Editar perfil.

## 7. Entrega

O projeto será entregue subindo seu código no GitHub (`commit` /`push`) e a
interface será hospedada usando o [Firebase Hosting](https://firebase.google.com/docs/hosting) pages ou outro serviço de hospedagem
que você pode ter encontrado ao longo do caminho.

---

## 8. Guias, dicas e leituras complementares

### 8.1. Primeiros passos

#### 8.1.1. Fork e clone

Como este projeto deve ser desenvolvido em trios, **apenas uma integrante** do trio precisará fazer o [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) e [adicionar as colaboradoras](https://docs.github.com/pt/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository) ao repositório. Após as demais integrantes terem recebido e aceito o convite de colaboração do repositório _forkado_, **todas as integrantes** poderão fazer o [clone](https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

#### 8.1.2. Inicialização de um projeto no Console do Firebase

Esta etapa de configuração do projeto no [Firebase Console](https://console.firebase.google.com/) deverá ser realizada por apenas **UMA integrante** do trio.

Inicie um novo projeto no [console do Firebase](https://console.firebase.google.com/) `Adicionar projeto`

- Insira o nome do seu projeto e clique em `Continuar`
- Pode deixar desativada a opção `Ativar o Google Analytics neste projeto`, pois não usaremos essa funcionalidade
- Clicar em `Criar projeto`

Adicionar as colaboradoras ao projeto Firebase

- No Dashboard do projeto criado, há no menu lateral uma engrenagem em `Visão geral do projeto`, selecionar `Usuários e permissões` para adicionar suas colegas como membro no projeto
- Utilizar os e-mails `Gmail` das colegas e configurar os papéis como `Proprietário`

Adicionar o Firebase ao seu aplicativo

- Adicione um Web app para começar
- Registre o `Apelido do app`
- Selecione para `Também configure o Firebase Hosting para este app`
- `Registrar app`
- `Adicionar o SDK do Firebase` no o arquivo `src/index.html` do projeto

#### 8.1.3. Instalação global de Firebase em sua máquina

Esta etapa deve ser realizada por **TODAS integrantes**.

Este projeto está configurado para rodar por meio do servidor do Firebase. Para isso, será necessário possuir o [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli) instalado globalmente em sua máquina. Utilize o comando a seguir no seu terminal:

```bash
npm install -g firebase-tools
```

Verifique se foi instalado corretamente, realizando o [login](https://firebase.google.com/docs/cli#sign-in-test-cli):

```bash
firebase login
```

O login é feito por meio de uma conta Google, portanto, deve abrir uma janela em um navegador automaticamente para realizar o login. Se não abrir, pode clicar no link que vai aparecer no terminal.

#### 8.1.4. Configuração do projeto Firebase no repositório

Esta etapa deverá ser realizada por apenas **UMA integrante** do trio.

**IMPORTANTE** rodar todos comandos do Firebase a seguir no terminal a partir da pasta raiz do projeto.

- Executar o comando para realizar o [login](https://firebase.google.com/docs/cli#sign-in-test-cli)
  ```bash
  firebase login
  ```
- Executar o comando para iniciar o setup do projeto
  ```bash
  firebase init
  ```
- Selecionar _Hosting_ (aperte `Espaço` do teclado para selecionar essa opção e depois `Enter`)
- Selecionar `Use an existing project`. No terminal vai aparecer o nome do projeto que você acabou de criar no site do Firebase Console, selecionar e dar `Enter`
- Escrever `src` para definir como `public directory`
- Escrever `y` para selecionar como SPA (Single Page Application)
- Escrever `N` para não fazer builds e deploys automáticos com GitHub
- O Firebase vai dizer que `src/index.html` já existe e pergunta se quer sobrescrever. Sugerimos dar `N`, para não sobrescrever o `index.html`
- Se der tudo certo, o Firebase vai criar o arquivo `.firebaserc` de configuração na pasta do projeto e estamos prontas pra continuar
- Faça o `commit` com a adição dessa configuração para o repositório do seu grupo. Dessa forma, todas terão acesso às configurações do Firebase

#### 8.1.5. Rodando a aplicação

Após atualização de seu repositório contendo a configuração inicial do projeto Firebase (item 8.1.4. acima), você deve abrir o terminal na raiz do projeto para rodar o comando de instalação de dependências:

```bash
npm i
```

E para rodar o projeto, use o comando:

```bash
npm start
```

Você verá que o servidor do Firebase está configurado para rodar seu projeto em [http://localhost:5000](http://localhost:5000).

Segue um 🎥 [vídeo](https://youtu.be/fTH-CUeuOc8) tutorial das etapas 8.1.2 até 8.1.5.

#### 8.1.6. Firebase Authentication

Os principais métodos de autenticação a serem usados neste projeto são:

- [Autenticação com e-mail e senha](https://firebase.google.com/docs/auth/web/password-auth?authuser=0)
- [Login com Google](https://firebase.google.com/docs/auth/web/google-signin?authuser=0)

A configuração deve ser feita no [console do Firebase](https://console.firebase.google.com/):

- Clique no menu lateral `Authentication` e em `Primeiros passos`
- Na aba `Sign-in method`, escolher os métodos, `Ativar` e `Salvar`

Segue um [vídeo](https://youtu.be/gvOjISEbOr8) tutorial.

Documentação: [Authentication](https://firebase.google.com/docs/auth/web/start)

#### 8.1.7. Configuração de base de dados Firestore Database

No [console do Firebase](https://console.firebase.google.com/), adicionar Firestore Database ao projeto Firebase.

- Clique no menu lateral `Firestore Database` e em `Criar banco de dados`
- Selecionar `Iniciar no modo de produção`, clicar em `Avançar`
- Escolher a região `us-east1` e clicar em `Ativar`
- Na tela de `Cloud Firestore`, ir na aba de `Regras` e editar para `true` e `Publicar`
  ```
  rules_version = ‘2’;
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if true;
      }
    }
  }
  ```

Documentação: [Cloud Firestore](https://firebase.google.com/docs/firestore)

### 8.2. Mobile first

O conceito de [_mobile
first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) faz
referência a um processo de desenho e desenvolvimento que parte de como se vê e
como funciona uma aplicação primeiro em um dispositivo móvel e mais adiante se
analisa como adaptar a aplicação à telas progressivamente maiores. Esta é uma
contraposição ao modelo tradicional, no qual primeiro se desenha os websites (ou
webapps) para desktops e depois os adaptam para telas menores.

A motivação aqui é se assegurar que desde o começo sejam desenhadas telas
_responsivas_. Dessa forma, começamos com a aparência e o comportamento do
aplicativo em uma tela e ambiente móvel.

### 8.3. Múltiplas telas

Em projetos anteriores, nossas aplicações eram compostas de apenas uma tela
_principal_ (uma só _página_). Neste projeto, precisaremos dividir nossa
interface em várias _views_ ou _pages_ e oferecer uma maneira de navegar entre
essas telas. Esse problema pode ser resolvido de várias maneiras: com arquivos
HTML independentes (cada um com seu próprio URL) e links tradicionais; mantendo
na memória e renderizando condicionalmente (sem atualizar a página);
[manipulando o histórico do
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_na_gador)
com
[`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
Neste projeto, convidamos você a explorar opções e decidir sobre uma opção de
implementação.

O [vídeo](https://youtu.be/hf8x3A1e57Y) da Paloma pode ajudar nessa etapa.

### 8.4. Gravação de dados

Nos projetos anteriores, consumimos dados, mas ainda não tínhamos escrito dados
(salvar alterações, criar dados, excluir, etc). Neste projeto, você precisará
criar (salvar) novos dados, além de ler, atualizar e modificar os dados
existentes. Esses dados podem ser salvos remotamente usando o
[Firebase](https://firebase.google.com/).

Outras:

- [Mobile
  First](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/)
- [Mobile First Is NOT Mobile Only - Nielsen Norman
  Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
- [Flexbox - CSS
  Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Módulos:
  Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
- [Módulos:
  Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
