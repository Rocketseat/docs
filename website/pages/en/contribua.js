/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container

const Contribua = props => (
  <div className="docMainWrapper wrapper">
    <Container className="mainContainer">
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 960,
          margin: '0 auto'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p>
            Contribuições são o que fazem a comunidade open source um lugar
            incrível para aprender, inspirar e criar.
          </p>
          <p>
            Qualquer contribuição que você fizer será <b>muito apreciada</b>.
          </p>
        </div>
        <h2>Quero contribuir! Como faço?</h2>
        <p>É muito simples! 😊 Aqui vai um exemplo:</p>
        <ol>
          <li>
            Faça um fork do projeto aqui:{' '}
            <a href="https://github.com/Rocketseat/docs">
              https://github.com/Rocketseat/docs
            </a>
          </li>
          <li>
            Crie uma branch para a sua contribuição. Exemplo:{' '}
            <code>git checkout -b contribuicao/MinhaContribuicao</code>
          </li>

          <li>
            Para iniciar o servidor das documentações, rode:{' '}
            <code>cd website && npm install && npm start</code>
          </li>

          <li>
            Os arquivos das documentações estão em{' '}
            <code>/docs/[documentacao]</code>. Procure pelo arquivo .md
          </li>

          <li>
            Adicione suas mudanças: <code>git add .</code>
          </li>
          <li>
            Faça um commit de suas mudanças:{' '}
            <code>git commit -m 'Arrumando link quebrado'</code>
          </li>
          <li>
            Faça o push da branch criada anteriormente:{' '}
            <code>git push origin contribuicao/MinhaContribuicao</code>
          </li>
          <li>
            Abra uma pull request aqui:{' '}
            <a href="https://github.com/Rocketseat/docs/pulls">
              https://github.com/Rocketseat/docs/pulls
            </a>
          </li>
        </ol>

        <h3 align="center">Obrigado por ajudar ♥</h3>
      </div>
    </Container>
  </div>
)

module.exports = Contribua
