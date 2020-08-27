---
id: introducao
title: Introdução
sidebar_label: Introdução
---

<div class="callout">
  <h2>
    <i class="fa fa-exclamation-triangle"></i>
    A documentação de dual boot mudou!
  </h2>
  <p>
    Agora ela está disponível em outro local.
    <a href="https://www.notion.so/Ubuntu-20-04-a61bc0eaa4764dec88e55b1f871abbe1" rel="noopener noreferrer">Clique
    aqui para acessar!</a>
  </p>
</div>

![](assets/dual-boot-windows-linux/header.png)

Hoje iremos preparar um ambiente para rodar Windows + Linux no mesmo sistema, utilizando a técnica dual boot.

Requisitos:

- Pendrive (recomendo com armazenamento de, no mínimo, 8GB)
- [Ubuntu 18.04.2+ (LTS)](https://www.ubuntu.com/download/desktop) ou [Linux Mint 19.1+ Cinnamon](https://linuxmint.com/download.php)
- [Rufus (portable)](https://rufus.ie/)
- Armazenamento disponível para a instalação do Linux (mínimo 64gb)

## Preparando o ambiente

Durante o download do Linux, já podemos ir preparando nosso disco para recebê-lo para ganharmos tempos.

Vamos começar acessando o **Gerenciador de Discos** do Windows. Pra isso, pressione <kbd>Windows + R</kbd>. Na janela, digite <code>diskmgmt.msc</code>:

![](assets/dual-boot-windows-linux/1.png)

Para liberar espaço em um disco, clique com o botão direito > **Shrink Volume...**

![](assets/dual-boot-windows-linux/2.png)

Nesse campo, informamos a quantidade espaço que iremos liberar para a instalação do Linux. **Recomendo, no mínimo, 64GB.**

![](assets/dual-boot-windows-linux/3.png)

Nesse momento, o Windows vai pensar um pouquinho...

## Preparando um pendrive bootável

> **Seu pendrive será FORMATADO. Caso tenha dados importantes, faça um backup primeiro.**

Utilizaremos a ferramenta **Rufus** nessa etapa. Com ele, iremos preparar um pendrive bootável. Dessa forma ele será reconhecido na inicialização da máquina.

Com a aplicação já aberta, iremos configurar dessa forma:

![](assets/dual-boot-windows-linux/4.png)

1. Aqui você irá escolher seu pendrive.
2. Aqui você irá escolher um nome (label) para o pendrive, quando a criação for bem-sucedida.
3. Aqui você irá procurar pela imagem (.iso) do Linux, baixada nas etapas iniciais.

Clique em **Start** para iniciar.

> Você poderá ser recebido com uma mensagem sobre a instalação do Syslinux. Caso receba, clique em **Sim**.

## Inicializando o pendrive

Com o pendrive bootável espetado em uma porta USB, reinicie sua máquina.

Aqui, o seu objetivo é fazer o pendrive ser inicializado **antes** do disco padrão (com Windows). Essa opção varia de placa-mãe. Você consegue saber qual tecla apertar para acessar o menu de boot na tela inicial, assim que sua máquina está sendo inicializada.

Vamos para a parte de instalação. Selecione a distro baixada inicialmente:

<a class="link-block" href="/dual-boot-windows-linux/ubuntu"><i class="fab fa-ubuntu"></i>Ubuntu</a>
<a class="link-block" href="/dual-boot-windows-linux/mint"><i class="fab fa-linux"></i>Linux Mint</a>
