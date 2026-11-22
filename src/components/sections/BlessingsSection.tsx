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
        <div className="family-line">
          <p className="family-header">{blessing.header}</p>
          <div className="family-couple">
            <div className="family-person">
              <strong>{blessing.groomFullName}</strong>
              {blessing.groomParents && <small>{blessing.groomParents}</small>}
            </div>
            <span className="family-amp" aria-hidden="true">&amp;</span>
            <div className="family-person">
              <strong>{blessing.brideFullName}</strong>
              {blessing.brideParents && <small>{blessing.brideParents}</small>}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.3}>
        <b aria-hidden="true">❦</b>
      </Reveal>
    </section>
  );
};
