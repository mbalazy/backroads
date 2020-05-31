import React from 'react';
import socialIcons from 'constans/social-icons';
import { ButtonSimplest } from 'components/atoms/Buttons.component';

const SocialItems = ({ ...props }) => {
  return (
    <div {...props}>
      {socialIcons.map(({ icon, url }) => (
        <ButtonSimplest key={url} type="button">
          <a target="_blank" rel="noreferrer noopener" href={url}>
            {icon}
          </a>
        </ButtonSimplest>
      ))}
    </div>
  );
};

export default SocialItems;
