---
id: windows
title: Windows
sidebar_label: Windows
---

![Windows](assets/windows.png)

1. Instale o Chocolatey e as demais dependências: [Instalando chocolatey](#chocolatey)
2. Instale e configure a SDK do Android: [Configurando SDK](#configurando-sdk-do-android-no-windows)
3. Instale e configure o emulador Genymotion: [Configurando Emulador](/ambiente-react-native/android/emulador)

<hr>

## Chocolatey

> Para configurar o ambiente Android no Windows, vamos precisar instalar 4 dependências: **Node, Python2, JDK e a SDK do Android.**

### Instalando Chocolatey

Para instalar as libs no Windows, vamos utilizar um gerenciador de pacotes do Windows chamado Chocolatey. Essa ferramenta nos possibilita instalar dependências e ferramentas no sistema com poucos comandos e tudo pelo terminal.
Execute o prompt de comando ou powershell como administrador utilizando a tecla <kbd>Windows + X</kbd> ou clicando com o botão direito sobre o botão “Iniciar”:

![Prompt](assets/ambiente-react-native/prompt.png)

Agora, você deve executar os comandos abaixo de acordo com a **opção que você clicou**

### Command Prompt

Caso a opção que você tenha clicado tenha o nome de **Command Prompt**, execute o comando abaixo na janela aberta para instalar o Chocolatey:

```console
$ @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

### Powershell

Caso a opção tenha sido **Powershell**, execute o comando abaixo para verificar se você possui permissões para instalar dependências com o terminal:

```console
$ Get-ExecutionPolicy
```

**Se** o retorno desse comando for **“Restricted”**, execute o próximo comando em seu terminal, se não, prossiga para o próximo passo:

```console
$ Set-ExecutionPolicy AllSigned
```

Agora, execute o seguinte comando para instalar o Chocolatey:

```console
$ Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Agora, teste se a instalação ocorreu corretamente executando o seguinte comando no seu terminal (nada irá acontecer, mas não deve retornar erros). Nesse passo pode ser necessário reiniciar seu terminal.

```console
$ choco
```

Agora vamos instalar o Node, Python2 e a JDK8 (Java Development Kit 8).

```console
$ choco install -y nodejs.install python2 jdk8
```

> Se você tiver o NodeJS já instalado em sua máquina, certifique-se que sua versão é superior à 7 e caso esteja com o JDK instalado em sua máquina, certifique-se que sua versão seja a 8.

Agora com as dependências instaladas, vamos instalar o CLI (Command Line Interface) do React Native que nos ajudará na criação e teste de novos projetos. Nesse passo você provavelmente deve reiniciar seu terminal para o comando funcionar.

```console
$ npm install -g react-native-cli

// ou yarn global add react-native-cli
```

Se tudo ocorreu bem até aqui, você conseguirá executar o seguinte comando:

```console
$ react-native -h
```

Esse comando deve exibir uma lista de comandos possíveis para serem executados com o React Native CLI.

<hr>

## Configurando SDK do Android no Windows

![Android](assets/android-studio.png)

Crie uma pasta em um local desejado para instalação da SDK. Ex: `C:\Android\Sdk`

**Anote esse caminho para ser utilizado posteriormente**

Acesse https://developer.android.com/studio/#downloads, na opção "Command line tools only" baixe a SDK referente ao seu sistema operacional.

Após feito o Download, extraia o conteúdo do pacote para a pasta criada no passo anterior.

Agora, no Painel de Controle do Windows, abra o item “Sistema e Segurança” ou “Sistema”, clique em “Configurações avançadas do sistema”, selecione “Variáveis de ambiente” e clique no botão “Nova variável de ambiente”, indique o nome da variável como ANDROID_HOME, adicione o caminho utilizado acima (Ex: `C:\Android\Sdk`) como segundo parâmetro e clique em OK.

![Prompt](assets/ambiente-react-native/5.png)

Na mesma janela de "Variáveis de ambiente" no Windows, clique na variável PATH e então em "Editar". Haverá uma lista de caminhos e você deve adicionar esses dois novos caminhos no fim da lista:

1. `%ANDROID_HOME%\platform-tools`
2. `%ANDROID_HOME%\tools`

> **Se sua versão do Windows for menor que a 10 sempre coloque ponto-e-virgula ";" no final dos caminhos para eles não se juntarem**

Agora, abra seu Command Prompt ou PowerShell como administrador e execute o seguinte comando:

```console
$ C:\Android\Sdk\tools\bin\sdkmanager  "platform-tools" "platforms;android-27" "build-tools;27.0.3"
```

_\*Aceite todas licenças digitando <kbd>y</kbd> quando necessário._

## Instalando emulador

<a class="link-block" href="/ambiente-react-native/android/emulador"><i class="fab fa-android"></i>Genymotion</a>
