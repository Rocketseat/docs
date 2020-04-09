---
id: genymotion
title: Genymotion
sidebar_label: Genymotion
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

Erros no emulador do Android

### Your CPU is incompatible with virtualization technologies

Segundo o erro, sua CPU não permite virtualização.

Para tentar resolver, você pode acessar a BIOS da sua máquina e procurar por alguma opção com o nome VT-x ou Virtualization e alterar de "disabled" para "enabled".

Caso isso não resolva, você provavelmente terá que utilizar outro emulador, como o [Nox](https://pt.bignox.com/) e configurar o React Native para conseguir executar dentro dele, [veja aqui](https://stackoverflow.com/questions/46235080/nox-emulator-with-react-native).
