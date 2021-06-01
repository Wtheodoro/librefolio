import React from 'react';
import { pageVariants, pageTransition } from '../../assets/framerMotion'
import { RiVipCrown2Line } from 'react-icons/ri'
import Divider from '../../components/Divider';
import TimeLineCard from '../../components/TimeLine/TimeLineCard';
import TimeLineTitle from '../../components/TimeLine/TimeLineTitle';
import Title from '../../components/Title';
import { Container } from './styles';

const Resume: React.FC = () => {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>RESUME</Title>
      <h1>Education</h1>
      <Divider />

      <div className="timelines">
        <div className="lef">
          <TimeLineTitle>Education</TimeLineTitle>

          <TimeLineCard 
            title="Sotware Development"
            subtitle="Analysis and software development"
            icon={<RiVipCrown2Line/>}
          >
            Graduate student on Analysis and software development in Descomplica Pós with end expectedon january 2022
          </TimeLineCard>
          <TimeLineCard 
            title="Sotware Development"
            subtitle="Quality powders, test and software development"
            icon={<RiVipCrown2Line/>}
          >
            Graduate student on Quality powders, test and software development in Descomplica Pós with end expectedon december 2021
          </TimeLineCard>
          <TimeLineCard 
            title="PUC-Campinas"
            subtitle="Civil Enginnering"
            icon={<RiVipCrown2Line/>}
          >
            B.Sc. in Engeneering.
            Graduated in civil engineering from PUC-Campinas in december 2020
          </TimeLineCard>
          
        </div>

        <div className="right">
          <TimeLineTitle>Courses</TimeLineTitle>
          <TimeLineCard 
            title="Full stack development"
            subtitle="Avanced React by Willian Justen and Guilherme Louro"
            icon={<RiVipCrown2Line/>}
          >
            Focused on good practices, the course develops an E-commerce in NextJs, integration with graphQL, strapi, storybook and more.
          </TimeLineCard>
          <TimeLineCard 
            title="Front-end development"
            subtitle="Campinas Tech Talents"
            icon={<RiVipCrown2Line/>}
          >
            A bootcamp lasting 168 hours focused on front-end with React, Redux, API, Saga, tests and more.
          </TimeLineCard>
        </div>
        
      </div>
    </Container>
  )
}

export default Resume;