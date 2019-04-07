/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container

const Comunidade = props => (
  <div className="docMainWrapper wrapper">
    <Container className="mainContainer">
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <img style={{ marginBottom: 26 }} src="img/comunidade.svg" />
        <p>Você tem alguma dúvida ou está enfrentando um erro?</p>
        <p>Participe da comunidade da Rocketseat no Discord</p>

        <a href="https://rocketseat.com.br/comunidade" className="btn primary">
          <i className="fab fa-discord" />
          Acessar comunidade
        </a>
      </div>
    </Container>
  </div>
)

module.exports = Comunidade
