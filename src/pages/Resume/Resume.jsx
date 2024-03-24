import React from 'react'
import { FaBookReader,FaRegBookmark } from 'react-icons/fa'
import TimelineItem from '../Resume/TimelineItem'
import SkillItem from './SkillItem'
const Resume = () => {
  return (
    <section>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      {/* Education section */}
      <div className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <FaBookReader />
          </div>
          <h3 className='h3'>Education</h3>
        </div>
        <ol className='timeline-list'>
          <TimelineItem title="Global Institute of Technology, Jaipur(B.Tech, CS)" date="2021-2025" description="" />
          <TimelineItem title="S.S Jain Subodh Sr. Sec. School(12th)" date="2018-2019" description="" />
          <TimelineItem title="Navdeep Public Sec. School(10th)" date="2016-2017" description="" />
        </ol>
      </div>
      {/* Experience section */}
      <div className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <FaRegBookmark />
          </div>
          <h3 className='h3'>Experience</h3>
        </div>
        <ol className='timeline-list'>
          <TimelineItem title="Global Institute of Technology, Jaipur(B.Tech, CS)" date="2021-2025" description="" />
          <TimelineItem title="S.S Jain Subodh Sr. Sec. School(12th)" date="2018-2019" description="" />
          <TimelineItem title="Navdeep Public Sec. School(10th)" date="2016-2017" description="" />
        </ol>
      </div>
      {/* skill section */}
      <div className="skill">
        <h3 className='h3 skills-title'>My Skills</h3>
        <ul className='skills-list content-card'>
          <SkillItem title="Web Design" value="80" />
          <SkillItem title="Salesforce Admin & Development" value="80" />
          <SkillItem title="PowerBI" value="90" />
          <SkillItem title="Problem Solving" value="85" />
        </ul>
      </div>
    </section>
  )
}

export default Resume
