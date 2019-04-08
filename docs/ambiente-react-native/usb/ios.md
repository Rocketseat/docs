---
id: ios
title: iOS
sidebar_label: iOS
---

![](assets/ios.png)

Conecte seu dispositivo via USB.

No seu projeto React Native, acesse o diretório `ios`. Nesse diretório existe o arquivo `SEU_APP.xcodeproj`, que é gerado automaticamente na inicialização do seu projeto. Abra esse arquivo.

![](assets/ambiente-react-native/usb/ios/1.png)

> Se essa é a primeira vez que você está rodando um aplicativo no seu device, talvez seja preciso que você registre o device para desenvolvimento. Pra isso, no menu do Xcode, vá em **Product > Destination > Procure pelo seu device**.

Seu projeto será aberto no Xcode. Pra que possamos rodar e testar o projeto em um device físico, precisamos de um certificado de desenvolvedor. Pra isso, registre-se aqui: https://developer.apple.com/

Com o seu certificado pronto, clique no seu projeto na barra lateral esquerda. Nessa tela, teremos outra barra lateral com 2 categorias, PROJECT e TARGETS. Selecione o TARGET que tenha o mesmo nome da sua aplicação. Agora, na aba **General**, vamos até **Signing** e **certifique-se que sua conta de desenvolvedor ou time esteja selecionado em Team**.

![](https://facebook.github.io/react-native/docs/assets/RunningOnDeviceCodeSigning.png)

Bom, se tudo ocorreu bem até aqui, seu device aparecerá na barra de ferramentas do Xcode. Também será listado no painel **Devices** (<kbd>⇧ + ⌘ + 2</kbd>). Para rodar a aplicação, basta clicar em **Build and run** (<kbd>⌘ + R</kbd>) e aguardar.

![](https://facebook.github.io/react-native/docs/assets/RunningOnDeviceReady.png)
