---
id: emulador
title: Emulador
sidebar_label: Emulador
---

<!-- ![Genymotion](assets/ambiente-react-native/Emulador.png) -->

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

Utilizaremos o Genymotion como emulador do Android. Escolhi o Genymotion pelo fato de ser mais estável e rápido, mas você pode escolher utilizar o emulador do Android Studio.

**Antes de instalar o Genymotion vamos instalar o VirtualBox.**

Para ambientes Linux basta executar o seguinte comando no terminal:

```console
$ sudo apt-get install virtualbox
```

Para ambientes Mac OS X ou Windows você pode instalá-lo acessando o link https://www.virtualbox.org/wiki/Downloads ou optar por instalar junto com o Genymotion.

Agora vamos acessar o site https://www.genymotion.com/fun-zone/ e clicar no botão “Download Genymotion Personal Edition”. O Genymotion vai pedir que você crie uma conta na plataforma, realize esse processo e depois você poderá baixar o software.

Agora, em ambientes Mac OSX ou Windows, basta instalar o software e abrí-lo através de seus executáveis.

Caso esteja no Linux precisamos realizar um processo a mais: extraia o arquivo .bin baixado do site do Genymotion em uma pasta de sua escolha e acesse-a via terminal. Acesse a pasta do arquivo extraído execute o seguinte comando:

```console
$ chmod +x genymotion-2.2.2_x64.bin
$ ./genymotion-2.2.2_x64.bin
```

> Altere 2.2.2 pela versão do Genymotion que você baixou.

Com isso o Genymotion será instalado em seu sistema e você já pode acessá-lo a partir da pasta de instalação. Por padrão a pasta que o Genymotion é instalado é `/home/[usuario]/genymotion/`. Acesse essa pasta pelo terminal e execute o seguinte comando para abrir o Genymotion:

```console
$ ./genymotion
```

Como o Genymotion aberto, vamos acessar as **Preferences**:

![](assets/ambiente-react-native/genymotion/01_2.png)

Clique no botão **Settings** e na aba **Account** faça login com sua conta criada no site do Genymotion.

Após realizado login, ainda no menu **Settings**, na aba **ADB** precisamos informar o caminho da nossa SDK do Android

Selecione a opção **Use Custom Android SDK Tools** no Genymotion e utilize o caminho onde você extraiu os arquivos baixados do site do Android anteriormente (Ex.: `C:\Android\Sdk` ou `~/Android/Sdk`).

Sua configuração deve ficar parecida com essa:

![](assets/ambiente-react-native/genymotion/02_2.png)

Agora fechando as configurações, voltando a tela principal do Genymotion podemos clicar na opção **Add** que abrirá a seguinte tela:

![](assets/ambiente-react-native/genymotion/03.png)

Vou utilizar um _Samsung Galaxy S8 - 7.0.0 API 24_ mas aqui você pode selecionar a opção que mais lhe agradar, tente utilizar sempre versões mais recentes do Android. Selecione a opção e clique em **Next**.

![](assets/ambiente-react-native/genymotion/04_2.png)

Depois disso ele irá te pedir um nome para o emulador, coloque o que preferir ou deixe o padrão. Depois disso clique em **Next** novamente e aguarde o download das dependências. Ao acabar o processo você terá um novo emulador na lista inicial do Genymotion:

![](assets/ambiente-react-native/genymotion/05_2.png)

Com dois cliques em cima do Emulador agora será possível executar o ambiente Android. Caso você receba algum erro durante esse processo recomendo executar a máquina virtual do Android diretamente pelo VirtualBox pois dessa forma você terá o log de inicialização do ambiente que conterá qualquer possível erro.

## Conectar emulador ao ADB (Android Debug Bridge)

A última etapa é conectar o emulador ao ADB, pelo IP do dispositivo. Para verificar o IP do dispositivo, basta esticar a janela do emulador, o IP estará no título da janela.

No terminal rode o comando:

```console
$ adb connect IP_DO_SEU_EMULADOR:5555
```

Logo após, rode:

```console
$ adb devices
```

Se aparecer o nome do seu dispositivo na lista, **seu emulador foi conectado com sucesso!**

Com o emulador aberto, basta rodar `react-native run-android` na pasta do seu projeto.
