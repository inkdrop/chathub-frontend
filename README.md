# Instalação #
Siga essas instruções pra deixar seu ambiente de desenvolvimento supimpa

## Requisitos ##
- Ruby
- Node

## Mão na massa ##
- A partir do diretório raíz da aplicação execute:
- ```$ gem install sass```
- ```$ npm install```
- ```$ npm install webpack -g```
- ```$ npm install webpack-dev-server -g```
- ```$ npm run dev```
- Acesse ```http://localhost:8080/webpack-dev-server/``` e seje feliz

Agora é só fritar!

# Storybook
O Storybook é uma ferramenta usada para desenvolver componentes de uma forma isolada e
independente da aplicação utilizando ```stories```. Um componente pode ter várias ```stories```
e cada uma delas deve representar um estado diferente do mesmo componente.

**Estado 1**
[imagem](http://i.imgur.com/uvJlF94.png)

**Estado 2**
[imagem](http://i.imgur.com/lrWGcIH.png)

## Como usar
- Crie um novo componente no dir ```components``` (ex ```Botao.js```)
- Crie uma ```story``` para esse componente (mesmo nome, mas com letra minúscula, ex ```botao.js```)
no dir ```stories``` que fica dentro de ```components```
- Declare essa nova ```story``` na configuração do ```Storybook``` (```.storybook/config.js```)
- Para rodar o Storybook execute ```$ npm run storybook```
- Agora é só fritar codando seus componentes enquanto o Storybook atualiza tudo automaticamente p vc
