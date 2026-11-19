import React from 'react';
import { invitationContent } from '../../content/invitation';
import { SectionHeading } from '../primitives/SectionHeading';
import { Reveal } from '../primitives/Reveal';

export const StorySection: React.FC = () => {
  const { story } = invitationContent;

  return (
    <section className="section journey" id="story">
      <SectionHeading
        eyebrow={story.eyebrow}
        title={story.title}
      />

      <div className="timeline">
        {story.milestones.map((milestone, idx) => (
          <article className="milestone" key={milestone.title}>
            <div className="heart-node" aria-hidden="true">
              ♥
            </div>

            <Reveal
              delay={idx * 0.15}
              direction={idx % 2 === 0 ? 'up' : 'up'}
              className="milestone-copy"
            >
              <span>{milestone.date}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.note}</p>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
};
