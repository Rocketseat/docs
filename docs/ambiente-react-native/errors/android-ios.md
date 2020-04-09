---
id: android-ios
title: Android / iOS
sidebar_label: Android / iOS
---

<div class="callout">
  <h2>
    <i class="fa fa-exclamation-triangle"></i>
    A documentação de React Native mudou!
  </h2>
  <p>
    Agora ela está disponível em outro local.
    <a href="http://react-native.rocketseat.dev/" rel="noopener noreferrer">Clique
    aqui para acessar!</a>
  </p>
</div>

Erros que podem acontecer em ambas as plataformas

### The development server returned response error code: 500

Geralmente esse erro acontece quando você tenta importar um arquivo JS que não possui `export default` ou não possui nenhum componente dentro dele.

Primeiramente cheque todos arquivos e importações recentes que você fez para garantir que todos possuem import/exports e seus devidos componentes.

Caso isso não resolva, feche a janela do terminal **Metro Bundler** que abre automaticamente com o `run-ios/run-android` e na pasta do seu projeto execute:

```sh
$ react-native start --reset-cache
```

Esse comando irá limpar o cache do React Native provavelmente resolvendo o erro.
