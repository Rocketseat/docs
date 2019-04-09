---
id: android
title: Android
sidebar_label: Android
---

![](assets/android.png)

O primeiro passo é verificar se seu dispositivo está configurado corretamente para receber uma aplicação instalada via USB, para isso verifique [**aqui**](https://docs.rocketseat.dev/ambiente-react-native/usb/android) se você já seguiu esses passos.

Com o dispositivo configurado corretamente, você precisará instalar o aplicativo nele ao menos pela primeira vez, e isso você pode ver como fazer também no [**final desse guia**]().

Antes de começar a configuração para rodar no WiFi, garanta que seu dispositivo físico e a máquina onde o Metro Bundler está rodando estejam conectados a mesma Rede Wireless.

Verificado esse ponto, você vai precisar do IP da sua máquina, para logo mais usar na configuração da aplicação, segue abaixo como obter tal informação em cada Plataforma:

---

## Windows

Abra o **Prompt de Comando** ou o **PowerShell** e execute o comando `ipconfig`, o resultado deve ser uma lista que contém o IP da sua máquina na Rede.

## Linux

Abra o **Terminal** e execute o comando `ifconfig`, o resultado deve ser uma lista que contém o IP da sua máquina na Rede.

## macOS

Vá até **Preferências do Sistema** depois entre na opção **Rede**. Na tela que for aberta o IP já deve estar aparecendo.

Agora que você já tem acesso ao IP da sua máquina, abra a aplicação no dispositivo físico (se não estiver aberta), em seguida chacoalhe o dispositivo para abrir o **Developer Menu**, com ele aberto selecione a opção **Dev Settings**, dentro das configurações selecione a opção **Debug server host & port for device**.

---

No modal que abriu insira o IP da sua máquina, que foi obtido anteriormente, seguido da porta **8081**, por exemplo:

```console
$ 10.0.1.1:8081
```

Você pode ver o passo a passo nas imagens abaixo:

![](assets/ambiente-react-native/wifi/android/01.png)

Feito isso você pode voltar para a tela da aplicação, desconectar o cabo que estava conectado na sua máquina, abrir o **Developer Menu** chacoalhando o dispositivo e dar um **Reload**.

Nesse ponto a aplicação deve estar funcionando corretamente e sem o uso de nenhum cabo, utilizando apenas a Rede Wireless.
