---
id: linux
title: Linux
sidebar_label: Linux
---

![Linux](assets/ambiente-react-native/Linux.png)

1. Instale NodeJS, JDK e demais dependências: [Instalando dependências](#instalando-dependencias)
2. Instale e configure a SDK do Android: [Configurando SDK](#configurando-sdk-do-android)
3. Instale e configure o emulador Genymotion: [Configurando Emulador](/ambiente-react-native/android/emulador)

<hr>

## Instalando dependências

> Para configurar o ambiente Android no Linux, vamos precisar instalar 2 dependências: **Node e JDK.**

### Ubuntu (deb)

#### Instalando cURL

Certifique-se que você tenha o cURL instalado executando o seguinte comando no terminal:

```console
$ sudo apt-get install curl
```

#### Instalando NodeJS

Agora com o cURL instalado, vamos instalar no NodeJS utilizando os seguintes comandos:

```console
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
$ sudo apt install nodejs
```

> Caso você não esteja em distribuições Debian/Ubuntu, siga os passos para instalação de acordo com seu sistema: https://nodejs.org/en/download/package-manager

#### Instalando React Native CLI

Com o NodeJS instalado, podemos instalar o CLI (Command Line Interface) do React Native:

```console
$ sudo npm install -g react-native-cli

// Ou yarn global add react-native-cli
```

#### Instalando JDK (Java Development Kit)

Agora precisamos instalar a JDK (Java Development Kit) na versão 8 com o seguinte comando:

```console
$ sudo add-apt-repository ppa:openjdk-r/ppa
$ sudo apt-get update
$ sudo apt-get install openjdk-8-jdk
```

> **A versão 8 do JDK é obrigatória, não utilize versões mais recentes.**

Podemos testar a instalação do JDK com o seguinte comando:

```console
$ java -version
```

#### Instalando libs gráficas

Em grande parte das vezes precisamos instalar algumas bibliotecas da versão 32bits do Linux para conseguir emular nosso projeto e para isso vamos utilizar o seguinte comando:

```console
$ sudo apt-get install gcc-multilib lib32z1 lib32stdc++6
```

### Arch Linux

#### Instalando NodeJS

Vamos instalar o NodeJS utilizando o seguintes comando:

```console
$ sudo pacman -S nodejs npm
// Ou sudo pacman -S nodejs yarn
```

#### Instalando React Native CLI

Com o NodeJS instalado, podemos instalar o CLI (Command Line Interface) do React Native:

```console
$ sudo npm install -g react-native-cli

// Ou yarn global add react-native-cli
```

#### Instalando JDK (Java Development Kit)

Agora precisamos instalar a JDK (Java Development Kit) na versão 8 com o seguinte comando:

```console
$ sudo pacman -S jdk8-openjdk
```

> **A versão 8 do JDK é obrigatória, não utilize versões mais recentes.**

Para isso, podemos defini-lo como padrão com o seguinte comando:

```console
$ archlinux-java set java-8-openjdk
```

#### Instalando libs gráficas

Em grande parte das vezes precisamos instalar algumas bibliotecas da versão 32bits do Linux para conseguir emular nosso projeto e para isso vamos utilizar o seguinte comando para habilitar o repositório multilib:

```console
$ sudo sed -i "/\[multilib\]/,/Include/"'s/^#//' /etc/pacman.conf
```

## Configurando SDK do Android no Linux

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
$ ~/Android/Sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"
```

> Aceite todas licenças digitando <kbd>y</kbd> caso necessário.

## Instalando emulador

<a class="link-block" href="/ambiente-react-native/android/emulador"><i class="fab fa-android"></i>Genymotion</a>
