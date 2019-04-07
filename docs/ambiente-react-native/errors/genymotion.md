---
id: genymotion
title: Genymotion
sidebar_label: Genymotion
---

Erros no emulador do Android

### Your CPU is incompatible with virtualization technologies

Segundo o erro, sua CPU não permite virtualização.

Para tentar resolver, você pode acessar a BIOS da sua máquina e procurar por alguma opção com o nome VT-x ou Virtualization e alterar de "disabled" para "enabled".

Caso isso não resolva, você provavelmente terá que utilizar outro emulador, como o [Nox](https://pt.bignox.com/) e configurar o React Native para conseguir executar dentro dele, [veja aqui](https://stackoverflow.com/questions/46235080/nox-emulator-with-react-native).
