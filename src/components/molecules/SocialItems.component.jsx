import React from 'react';
import socialIcons from 'constans/social-icons';
import { ButtonSimplest } from 'components/atoms/Buttons.component';
import { v4 as uuidv4 } from 'uuid';

const SocialItems = ({ ...props }) => {
  return (
    <div {...props}>
      {socialIcons.map(({ icon, url }) => (
        <ButtonSimplest key={uuidv4()} type="button">
          <a target="_blank" rel="noreferrer noopener" href={url}>
            {icon}
          </a>
        </ButtonSimplest>
      ))}
    </div>
  );
};

export default SocialItems;
