---
id: publicacao
title: Publicação
sidebar_label: Publicação
---

Para publicar um template como esse o processo bastante simples e rápido.

1. Crie uma conta no [site do NPM](https://www.npmjs.com/);
2. Com a conta criada execute o comando abaixo e insira suas credenciais;

```console
$ npm login
```

3. Basta abrir o arquivo `package.json` e modificar as informações de acordo com o seu template, mas as informações mais importantes são duas, o `name` e o `version`, que são os únicos que tem restrições, seguem abaixo as restrições:
   1. O `name` sempre deve começar com o prefixo `react-native-template-` seguido do nome do seu template;
   2. O template deve ser publicado em uma conta pessoal, pois quando publicado em uma **Organization** é acrescentado o prefixo `@<nome_da_organization>` no nome do pacote;
   3. O `name` deve ser único, não podendo ser igual ao de um template já publicado;
   4. A `version` deve ser atualizada a cada publicação, se o template está na versão **0.0.1** e é preciso publicar uma atualização no mesmo, a version deve ser diferente e superior a versão atual, por exemplo, **0.0.2**;
4. Após configurar corretamente o `package.json` basta executar no terminal/prompt o comando `npm publish`;
5. Com a publicação finalizada o template deve ficar disponível através do link `https://www.npmjs.com/package/react-native-template-<nome_do_template>`.

