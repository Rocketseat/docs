---
id: android
title: Android
sidebar_label: Android
---

Lista de erros comuns enfrentados no Android

### Unable to load script from assets 'index.android.bundle'. Make sure...

Esse erro geralmente acontece porque o sistema não conseguiu criar o bundle inicial que contém todo o código Javascript da aplicação.

Para resolver comece criando uma pasta `assets` dentro da pasta `android/app/src/main`.

Logo após, execute o comando:

```sh
$ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

Agora, feche as abas do terminal e rode `react-native run-android` novamente.

### react-native run-android: FAILURE: Build failed with an exception.

Esse erro pode acontecer por muitos motivos, mas na maioria das vezes é algum cache que precisa ser deletado.

Para resolver execute na pasta do seu projeto:

```sh
$ cd android && gradlew clean && cd .. && react-native run-android
```

### Erros ao tentar ativar o JDK ou inicializar o projeto React Native

Seu sistema pode ter diversar versões do Java instaladas, para selecionar qual versão quer ativar use o comando: `sudo update-alternatives --config java` e selecione a versão 8.

Caso você tenha iniciado o projeto `react-native init projeto` com uma versão do Java acima da 8 e encontre alguns erros de build tente reinicializar (criar uma projeto novo) após ativar a versão 8 do Java.

### Failed to install the following Android SDK packages as some licences have not been accepted.

Esse erro geralmente acontece por alguma licença não ter sido aceitada na SDK do Android.

Primeiramente é necessário você conhecer o caminho da SDK do Android instalada em sua máquina. O caminho geralmenta aparece abaixo desse erro ou pode ser recuperado pela variável ambiente ANDROID_HOME ou até dentro da aba ADB na configuração do Genymotion.

Com o caminho em mãos (vamos supor que seja `/Users/myuser/Android/Sdk`) vamos rodar o comando:

```sh
$ /Users/myuser/Android/Sdk/tools/bin/sdkmanager --licenses
```

Após executar esse comando, digite <kbd>y</kbd> para todas as perguntas abaixo.

### react-native run-android: BUILD FAILURE: No connected devices!

Esse erro geralmente acontece quando o Android Debug Bridge (adb) não está conectado com o emulador. Digite no terminal `adb devices` com o emulador aberto, se aparecer a mensagem **List of devices attached**, provavelmente este é o seu problema.

Para resolver basta parar o serviço do bundle e na janela do emulador aberto verificar o **IP** do dispositivo (basta esticar a janela e ver na descrição dela o número de IP), depois digite o seguinte comando: `adb connect SeuIP:5555`

Irá aparecer uma mensagem de que o dispositivo foi **conectado com sucesso!**

Para confirmar se está tudo certo digite novamente `adb devices`, se aparecer o nome do seu dispositivo basta rodar o comando novamente: `react-native run-android`
