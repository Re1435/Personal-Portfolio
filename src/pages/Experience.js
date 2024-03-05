import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#2CADFD'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2007 - 2017'
          iconStyle={{ background: "#2CADFD", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>SSYVN High School, Chilamathur, AndhraPradesh</h3>
          <p>Class I - Class X</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2019'
          iconStyle={{ background: "#2CADFD", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>
            Balayesu Intermediate & Degree College, Hindupur, AndhraPradesh
          </h3>
          <p>Class XI - Class XII</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2019 - 2022'
          iconStyle={{ background: "#FDE42C", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Vishwa Chetana Degree College, Anekal, Bangalore, Karnataka</h3>
          <p>
            Bachelor's degree in Business Administration (BBA) <br />
            <span>(Specialized in Finance)</span>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2022 - 2023'
          iconStyle={{ background: "#FDE42C", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>
            Industry Ready Certification in Full Stack Development at NxtWave
            Disruptive Technologies
          </h3>
          <p>Frontend Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
