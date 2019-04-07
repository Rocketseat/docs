---
id: ios
title: iOS
sidebar_label: iOS
---

Lista de erros comuns enfrentados no iOS

### :CFBundleIdentifier does not exists

Esse erro geralmente acontece pois o React Native não conseguiu configurar as dependências e bibliotecas de terceiros dentro do iOS.
Para resolver acesse a pasta `node_modules/react-native/scripts` e execute:

```sh
$ ./ios-install-third-party.sh
```

Assim que finalizar, acesse a pasta `third-party/glog-x-x-x`, preencha `x-x-x` com a versão instalada (você pode utilizar o TAB para completar digitando `glog-` e clicando TAB). Dentro dessa pasta execute:

```sh
$ ../../ios-configure-glog.sh
```

Depois disso, volte à pasta do seu projeto e rode `react-native run-ios` (pode ser necessário rodar duas vezes)
