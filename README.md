# Painel de Despacho - Controle de Carga

Site para operadores cadastrarem e atualizarem docas em tempo real, abrirem
chamados de emergência, e para administradores acompanharem tudo isso (quem
alterou o quê, e quem atendeu cada chamado) em um painel exclusivo.

Tudo roda direto no navegador (HTML + JavaScript puro), sem servidor próprio.
Quem guarda os dados é o Firebase (Google) — por isso dá pra hospedar de
graça no GitHub Pages.

## Estrutura do projeto

```
index.html              página única do site
js/firebase-config.js   suas credenciais do Firebase (o único arquivo que você edita)
js/app.js               toda a lógica do site, já compilada (não precisa editar)
firestore.rules         regras de segurança para colar no Firebase
.nojekyll                avisa o GitHub Pages para não processar o site com Jekyll
```

## Passo 1 — Criar o projeto no Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com) e crie um projeto (gratuito).
2. No menu lateral, vá em **Build > Authentication** > aba "Sign-in method" > ative **E-mail/senha**.
3. No menu lateral, vá em **Build > Firestore Database** > **Criar banco de dados** > modo produção, escolha a região mais próxima.
4. Em **Firestore Database > Regras**, cole o conteúdo do arquivo `firestore.rules` e publique.
5. Em **Configurações do projeto** (ícone de engrenagem) > **Geral** > "Seus apps" > clique no ícone `</>` para criar um app Web.
6. Copie os valores mostrados (`apiKey`, `authDomain`, etc.) e cole em `js/firebase-config.js`.

## Passo 2 — Criar o primeiro administrador

1. Abra o site (local ou já publicado) e cadastre sua própria conta normalmente, pela tela de login.
2. No Firebase, vá em **Firestore Database > Dados** > coleção `controleCarga_users` > clique no documento com o seu UID.
3. Troque o campo `role` de `"user"` para `"admin"` e salve.
4. Recarregue o site logado — você vai cair direto no Painel Administrativo.

Repita o passo 3 para qualquer outra pessoa que deva ser administradora.

## Passo 3 — Testar localmente (opcional)

Dá pra abrir o `index.html` direto, com duplo clique, em qualquer navegador
(Chrome, Edge, Firefox). Como não há build nem servidor, funciona offline
exceto pelas bibliotecas carregadas por CDN (precisa de internet).

## Passo 4 — Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público ou privado, em planos pagos).
2. Suba estes arquivos mantendo a mesma estrutura de pastas (`index.html` na raiz, pasta `js/` ao lado).
3. No repositório, vá em **Settings > Pages**.
4. Em "Source", escolha **Deploy from a branch**, branch **main** (ou master), pasta **/ (root)**.
5. Salve. Em alguns minutos o GitHub mostra o link público (algo como `https://seu-usuario.github.io/nome-do-repo/`).

Pronto — o site publicado já fala direto com o seu Firebase, sem precisar de mais nada.

## Como funciona por dentro

- **Login/Cadastro**: cada pessoa cria a própria conta (e-mail/senha via Firebase Auth). Toda conta nova nasce com `role: "user"`.
- **Painel do operador**: cadastra docas (número, posições, mangas, paletes, gaylord, pacotes) e só vê as próprias docas. Cada doca tem um botão 🚨 de emergência que abre um chamado.
- **Painel do administrador**: vê em tempo real todas as docas de todos os operadores, todos os chamados (pode "Atender" e depois "Marcar como Resolvido"), e um Histórico de Alterações com tudo — cadastro/edição/exclusão de doca pelos operadores, e quem (qual admin) atendeu ou resolveu cada chamado. Esse histórico é visível para qualquer administrador, então todos veem o que os outros administradores estão fazendo.
- **Relatório**: só o administrador tem o botão de gerar relatório geral (texto para copiar/colar).

## Se algo não funcionar

Abra o site, aperte F12 (DevTools), clique em "Console" e veja se aparece
algum erro em vermelho — ele costuma dizer exatamente o que está errado
(ex: credencial do Firebase incorreta, regra de segurança bloqueando, etc.).
