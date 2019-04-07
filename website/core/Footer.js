/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  links = {
    docs: [
      {
        label: 'Ambiente React Native',
        path: 'ambiente-react-native/introducao'
      },
      {
        label: 'React Native Template Basic',
        path: 'react-native-template-basic/introducao'
      },
      {
        label: 'React Native Template Advanced',
        path: 'react-native-template-advanced/introducao'
      },
      {
        label: 'React Native Snippets',
        path: 'react-native-snippets/introducao'
      },
      {
        label: 'ReactJS Snippets',
        path: 'reactjs-snippets/introducao'
      }
    ],
    more: [
      { label: 'Comunidade', path: 'https://www.rocketseat.com.br/comunidade' },
      { label: 'Cursos gratuitos', path: 'https://rocketseat.com.br/starter' },
      { label: 'Github', path: 'https://github.com/rocketseat' }
    ]
  }

  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    const docsUrl = this.props.config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                //width="66"
                height="40"
              />
            )}
          </a>
          <div>
            <h5>Documentações</h5>
            {this.links.docs.map(link => (
              <a
                key={link.label}
                href={`${this.props.config.baseUrl}docs/${link.path}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <h5>Mais</h5>
            {this.links.more.map(link => (
              <a key={link.label} href={link.path}>
                {link.label}
              </a>
            ))}
          </div>
          {/* <div>
            <h5>Docs</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Getting Started (or other categories)
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Guides (or other categories)
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              API Reference (or other categories)
            </a>
          </div> 
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://discordapp.com/">Project Chat</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>*/}
        </section>

        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
        >
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    )
  }
}

module.exports = Footer
