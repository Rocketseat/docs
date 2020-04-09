---
id: xcode
title: macOS
sidebar_label: macOS
---

<!-- ![Xcode](assets/ambiente-react-native/macOS.png) -->

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

Para configurar o ambiente de iOS no OS X basta ter instalado o Xcode no sistema. Caso você ainda não tenha instalado, você pode baixar o mesmo pelo link https://developer.apple.com/xcode/

Com o Xcode instalado, basta executar o seguinte comando na pasta de um projeto React Native para rodar o React Native no simulador de iOS:

```console
$ react-native run-ios
```

Você pode ainda escolher a versão do emulador utilizado passando uma propriedade `--simulator`:

```console
$ react-native run-ios --simulator="iPhone XS Max"
```
