/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const Docs = [
  {
    path: 'ambiente-react-native',
    title: 'Ambiente React Native',
    icon: 'fas fa-mobile-alt',
    description: 'Prepare seu ambiente para desenvolver aplicações nativas'
  },
  {
    path: 'dual-boot-windows-linux',
    title: 'Dual Boot Windows + Linux',
    icon: 'fab fa-linux',
    description: 'Instale Windows e Linux na mesma máquina'
  }
];

const HomeSplash = (props) => {
  const { siteConfig, language = '' } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const SplashContainer = props => (
    <div className="homeContainer">
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">{props.children}</div>
      </div>
    </div>
  );

  const ProjectTitle = () => (
    <h2 className="projectTitle">
      {siteConfig.title}
      <small>{siteConfig.tagline}</small>
    </h2>
  );

  return (
    <SplashContainer>
      {/* <Logo img_src={`${baseUrl}img/docusaurus.svg`} /> */}
      <div className="inner">
        <ProjectTitle siteConfig={siteConfig} />
        <div className="docs-grid">
          {Docs.map(doc => (
            <a
              key={doc.path}
              className="item"
              href={`${docsPart + doc.path}/introducao`}
            >
              <i className={doc.icon} />
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </a>
          ))}
        </div>
      </div>
    </SplashContainer>
  );
};

const Index = props => {
  const { config: siteConfig, language = '' } = props;
  const { baseUrl } = siteConfig;

  const Block = props => (
    <Container
      padding={['bottom', 'top']}
      id={props.id}
      background={props.background}
    >
      <GridBlock
        align="center"
        contents={props.children}
        layout={props.layout}
      />
    </Container>
  );

  const FeatureCallout = () => (
    <div
      className="productShowcaseSection paddingBottom"
      style={{ textAlign: 'center' }}
    >
      <h2>Feature Callout</h2>
      <MarkdownBlock>These are features of this project</MarkdownBlock>
    </div>
  );

  const TryOut = () => (
    <Block id="try">
      {[
        {
          content: 'Talk about trying this out',
          image: `${baseUrl}img/docusaurus.svg`,
          imageAlign: 'left',
          title: 'Try it Out'
        }
      ]}
    </Block>
  );

  const Description = () => (
    <Block background="dark">
      {[
        {
          content: 'This is another description of how this project is useful',
          image: `${baseUrl}img/docusaurus.svg`,
          imageAlign: 'right',
          title: 'Description'
        }
      ]}
    </Block>
  );

  const LearnHow = () => (
    <Block background="light">
      {[
        {
          content: 'Talk about learning how to use this',
          image: `${baseUrl}img/docusaurus.svg`,
          imageAlign: 'right',
          title: 'Learn How'
        }
      ]}
    </Block>
  );

  const Features = () => (
    <Block layout="fourColumn">
      {[
        {
          content: 'This is the content of my feature',
          image: `${baseUrl}img/docusaurus.svg`,
          imageAlign: 'top',
          title: 'Feature One'
        },
        {
          content: 'The content of my second feature',
          image: `${baseUrl}img/docusaurus.svg`,
          imageAlign: 'top',
          title: 'Feature Two'
        }
      ]}
    </Block>
  );

  const Showcase = () => {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const showcase = siteConfig.users
      .filter(user => user.pinned)
      .map(user => (
        <a href={user.infoLink} key={user.infoLink}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      ));

    const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

    return (
      <div className="productShowcaseSection paddingBottom">
        <h2>Who is Using This?</h2>
        <p>This project is used by all these people</p>
        <div className="logos">{showcase}</div>
        <div className="more-users">
          <a className="button" href={pageUrl('users.html')}>
            More {siteConfig.title} Users
          </a>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <HomeSplash siteConfig={siteConfig} language={language} />
      {/* <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div> */}
    </div>
  );
};

module.exports = Index;
