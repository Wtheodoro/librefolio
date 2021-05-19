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
      <Title>Resume</Title>
      <h1>Education & Experience</h1>
      <Divider />

      <div className="timelines">
        <div className="lef">
          <TimeLineTitle>Education</TimeLineTitle>
          <TimeLineCard 
            title="PUC-Campinas"
            subtitle="Civil Enginnering"
            icon={<RiVipCrown2Line/>}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam libero ex sequi tempora vitae unde, culpa, incidunt
          </TimeLineCard>
          <TimeLineCard 
            title="PUC-Campinas"
            subtitle="Civil Enginnering"
            icon={<RiVipCrown2Line/>}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam libero ex sequi tempora vitae unde, culpa, incidunt
          </TimeLineCard>
        </div>

        <div className="right">
          <TimeLineTitle>Experience</TimeLineTitle>
          <TimeLineCard 
            title="PUC-Campinas"
            subtitle="Civil Enginnering"
            icon={<RiVipCrown2Line/>}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam libero ex sequi tempora vitae unde, culpa, incidunt
          </TimeLineCard>
          <TimeLineCard 
            title="PUC-Campinas"
            subtitle="Civil Enginnering"
            icon={<RiVipCrown2Line/>}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam libero ex sequi tempora vitae unde, culpa, incidunt
          </TimeLineCard>
        </div>
        
      </div>
    </Container>
  )
}

export default Resume;