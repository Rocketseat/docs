---
id: macos
title: macOS
sidebar_label: macOS
---

![macOS](assets/osx.png)

1. Instale NodeJS, JDK e demais dependências: [Instalando dependências](#instalando-dependencias)
2. Instale e configure a SDK do Android: [Configurando SDK](#configurando-sdk-do-android)
3. Instale e configure o emulador Genymotion: [Configurando Emulador](/docs/android/emulador)

<hr>

## Instalando dependências

> Para configurar o ambiente Android no Linux, vamos precisar instalar 3 dependências: **Node, Watchman, JDK**. Para boa parte desses pacotes utilizaremos o Homebrew para instalação.

### Instalando Homebrew

O Homebrew é um gerenciador de pacotes para OS X muito famoso e útil. Vamos instalá-lo em nosso sistema como seguinte comando:

```console
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Instalando Node e Watchman

Com o Homebrew instalado, vamos instalar o NodeJS e o Watchman:

```sh
$ brew install node
$ brew install watchman
```

### Instalando React Native CLI

Com o NodeJS instalado podemos seguir para a instalação do CLI (Command Line Interface) do React Native:

```sh
$ npm install -g react-native-cli

// Ou yarn global add react-native-cli
```

### Instalando JDK (Java Development Kit)

O último item a ser instalado é o JDK (Java Development Kit) do Java que pode ser baixado pelo link (Após instalado, execute o .dmg e instale seguindo os passos do instalador): http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html​

## Configurando SDK do Android

![Android](assets/android-studio.png)

Crie uma pasta em um local desejado para instalação da SDK. Ex: `~/Android/Sdk`

> Anote esse caminho para ser utilizado posteriormente

Acesse https://developer.android.com/studio/#downloads, na opção "Command line tools only" baixe a SDK referente ao seu sistema operacional.
Após feito o Download, extraia o conteúdo do pacote para a pasta criada no passo anterior.
Com esse endereço precisamos configurar algumas variáveis ambiente em nosso sistema, procure pelo primeiro dos seguintes arquivos existentes no seu sistema: `~/.bash_profile`, `~/.profile` ou `~/.zshrc`, e adicione essas três linhas no arquivo (de preferência no início):

```console
$ export ANDROID_HOME=~/Android/Sdk
$ export PATH=$PATH:$ANDROID_HOME/tools
$ export PATH=$PATH:$ANDROID_HOME/platform-tools
```

> Se nenhum desses arquivos existir, crie o `~/.bash_profile`. Caso esteja utilizando uma pasta diferente para a SDK do Android, altere acima.

Agora, abra seu Terminal e execute o seguinte comando:

```console
$ ~/Android/Sdk/tools/bin/sdkmanager  "platform-tools" "platforms;android-27" "build-tools;27.0.3"
```

> Aceite todas licenças digitando <kbd>y</kbd> caso necessário.
