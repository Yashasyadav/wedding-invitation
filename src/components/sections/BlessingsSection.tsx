import React from 'react';
import { invitationContent } from '../../content/invitation';
import { Reveal } from '../primitives/Reveal';

export const BlessingsSection: React.FC = () => {
  const { blessing } = invitationContent;

  return (
    <section className="blessing" id="blessings">
      <Reveal direction="down">
        <b aria-hidden="true">❦</b>
      </Reveal>

      <Reveal delay={0.1}>
        <blockquote>{blessing.quote}</blockquote>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="family-line">
          {blessing.header}
          <span>{blessing.groomFullName}</span>
          <span>&amp;</span>
          <span>{blessing.brideFullName}</span>
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.3}>
        <b aria-hidden="true">❦</b>
      </Reveal>
    </section>
  );
};
