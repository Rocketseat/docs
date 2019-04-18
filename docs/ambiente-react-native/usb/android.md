---
id: android
title: Android
sidebar_label: Android
---

![](assets/ambiente-react-native/Android.png)

Primeiramente conecte seu dispositivo via USB.

Com o dispositivo conectado é necessário que ele esteja com a Depuração USB habilitada, caso o seu ainda não esteja com as Opções de Desenvolvedor habilitadas, você pode seguir os passos abaixo.

Abra as **Configurações** do seu dispositivo, dentro das configurações vá no Menu **Sistema**, dentro de Sistema procure e abra a opção **Sobre**, o último Menu onde você deve entrar é **Informações de Software**.

Na tela que foi aberta clique repetidamente sobre o **Número da Versão** até aparecer uma mensagem indicando que as opções de desenvolvedor foram ativadas.

Você pode ver o passo a passo nas imagens abaixo:

![Passo a passo para ativação das Opções de desenvolvedor no Android](assets/ambiente-react-native/usb/android/01.png)

Feito isso falta apenas ativar a Depuração USB para o dispositivo estar pronto para uso, você deve voltar até o Menu **Sistema** e procurar pela opção **Opções de desenvolvedor**, que agora deve aparecer na sua lista.

Ao entrar nesse Menu você deve ativá-lo selecionando o primeiro botão que deve estar como **Desativado** e por último você tem que ativar a **Depuração USB**, que está um pouco abaixo nessa lista.

Você pode ver o passo a passo nas imagens abaixo:

![Passo a passo para ativação da Depuração USB no Android](assets/ambiente-react-native/usb/android/02.png)

Com isso configurado abra o terminal/prompt e execute o comando `adb devices`, o retorno deve ser algo como:

```bash
List of devices attached
14ed2fcc device # Dispositivo físico
```

Se estiver escrito **device** ao lado do ID do dispositivo significa que ele está pronto para rodar a aplicação. Nesse ponto basta executar o comando abaixo e aguardar a aplicação ser instalada no seu dispositivo.

```console
$ react-native run-android
```
