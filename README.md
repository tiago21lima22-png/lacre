# Despacho — Painel de Docas

Site para operadores cadastrarem e atualizarem docas em tempo real, abrirem
chamados de emergência (com alerta sonoro), e para administradores
acompanharem tudo isso — quem alterou o quê, e quem atendeu cada chamado —
num painel exclusivo, com tema escuro profissional.

Tudo roda direto no navegador (HTML + JavaScript puro), sem servidor próprio.
Quem guarda os dados é o Firebase (Google) — por isso dá pra hospedar de
graça no GitHub Pages.

## Estrutura do projeto

```
index.html              página única do site (tema escuro + dourado)
js/firebase-config.js   suas credenciais do Firebase (o único arquivo que você edita)
js/app.js               toda a lógica do site, já compilada (não precisa editar)
firestore.rules         regras de segurança para colar no Firebase
.nojekyll                avisa o GitHub Pages para não processar o site com Jekyll
```

## O que o site faz

**Login/Cadastro** — cada pessoa cria a própria conta (e-mail/senha via
Firebase Auth). Toda conta nova nasce como operador comum. O documento de
perfil só é criado no Firebase para quem realmente acabou de se cadastrar
e está logado — nunca para terceiros.

**Painel do operador**
- Cadastra docas (número, posições, mangas, paletes, gaylord, pacotes) e só vê as próprias.
- Clicar numa doca abre os detalhes completos (todos os campos, responsável, datas).
- De dentro do detalhe (ou direto no card) dá pra Editar, Excluir ou abrir um chamado de Emergência.
- O botão de emergência abre um modal com motivo + detalhes; ao confirmar, soa um alerta sonoro e o chamado aparece em tempo real para todos os admins (que também ouvem um aviso sonoro).
- Quem abriu o chamado pode cancelá-lo a qualquer momento antes dele ser resolvido, em "Meus Chamados".

**Painel do administrador (exclusivo)**
- Vê em tempo real todas as docas de todos os operadores — e também pode **cadastrar e editar docas diretamente**, atribuindo um responsável por texto livre (não precisa criar conta para a pessoa).
- Aba **Chamados**: atende e resolve chamados; cada chamado "Aberto" pulsa visualmente e toca um som assim que chega.
- Aba **Histórico**: todo cadastro/edição/exclusão de doca, e toda ação de admin (atendeu, resolveu) ou cancelamento do operador fica registrado, com nome de quem fez e quando — visível para qualquer administrador. Cada entrada pode ser apagada individualmente, e há um botão para limpar o histórico inteiro.
- Botão de **Relatório Geral** para copiar um resumo em texto de todas as docas e chamados pendentes.

## Passo 1 — Criar o projeto no Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com) e crie um projeto (gratuito).
2. No menu lateral, vá em **Build > Authentication** > aba "Sign-in method" > ative **E-mail/senha**.
3. No menu lateral, vá em **Build > Firestore Database** > **Criar banco de dados** > modo produção, escolha a região mais próxima.
4. Em **Firestore Database > Regras**, cole o conteúdo do arquivo `firestore.rules` e publique.
5. Em **Configurações do projeto** (ícone de engrenagem) > **Geral** > "Seus apps" > clique no ícone `</>` para criar um app Web (se ainda não tiver).
6. Copie os valores mostrados (`apiKey`, `authDomain`, etc.) e cole em `js/firebase-config.js`.

## Passo 2 — Criar o primeiro administrador

1. Abra o site (local ou já publicado) e cadastre sua própria conta normalmente, pela tela de login.
2. No Firebase, vá em **Firestore Database > Dados** > coleção `controleCarga_users` > clique no documento com o seu UID.
3. Troque o campo `role` de `"user"` para `"admin"` e salve.
4. Recarregue o site logado — você vai cair direto no Painel Administrativo.

Repita o passo 3 para qualquer outra pessoa que deva ser administradora.

## Passo 3 — Testar localmente (opcional)

Dá pra abrir o `index.html` direto, com duplo clique, em qualquer navegador
(Chrome, Edge, Firefox), mantendo a pasta `js/` ao lado. Como não há build
nem servidor, funciona offline exceto pelas bibliotecas carregadas por CDN
(precisa de internet).

## Passo 4 — Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público ou privado, em planos pagos).
2. Suba estes arquivos mantendo a mesma estrutura de pastas (`index.html` na raiz, pasta `js/` ao lado).
3. No repositório, vá em **Settings > Pages**.
4. Em "Source", escolha **Deploy from a branch**, branch **main** (ou master), pasta **/ (root)**.
5. Salve. Em alguns minutos o GitHub mostra o link público (algo como `https://seu-usuario.github.io/nome-do-repo/`).

Pronto — o site publicado já fala direto com o seu Firebase, sem precisar de mais nada.

## Se algo não funcionar

Abra o site, aperte F12 (DevTools), clique em "Console" e veja se aparece
algum erro em vermelho — ele costuma dizer exatamente o que está errado
(ex: credencial do Firebase incorreta, regra de segurança bloqueando, etc.).

Se o alerta sonoro de emergência não tocar, confira se o navegador não está
bloqueando áudio automático (alguns navegadores exigem uma primeira
interação na página antes de permitir som — basta ter clicado em qualquer
botão do site uma vez).
