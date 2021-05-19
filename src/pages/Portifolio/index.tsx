import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import Divider from '../../components/Divider';
import PortifolioCard from '../../components/RotatingText/PortifolioCard';
import Title from '../../components/Title';
import { Container } from './styles';

const Portifolio: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>PORTIFOLIO</Title>
      <h1>Let's See My Work</h1>
      <Divider />

      <div className="views">
        <PortifolioCard
          title="My Wallet"
          buttonLabel="Go to Repository"
          link="https://github.com/Wtheodoro/my_wallet"
          img="https://github.com/Wtheodoro/my_wallet/blob/main/public/Gif/my-walletGIF.gif?raw=true"
        >
          A web finance manegement, builded with react, typescript, stylized with tyled-components and reCharts for animated charts

        </PortifolioCard>

        <PortifolioCard
          title="Team Page"
          buttonLabel="Visit Webpage"
          link="https://wtheodoro.github.io/my_team_page/"
          img="https://github.com/Wtheodoro/my_team_page/blob/main/gif/desktop.gif?raw=true"
        >
          A team page made with HTML, CSS and Javascript. It is product of devChallenges.io
        </PortifolioCard>       
      </div>
    </Container>
  )
}

export default Portifolio;