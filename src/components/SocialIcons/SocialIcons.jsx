import React from 'react';
import { NavLink } from 'react-router-dom';
import { githubIcon } from 'src/assets/svg/svg-modules/github';
import { linkedInIcon } from 'src/assets/svg/svg-modules/linkedIn';
import './SocialIcons.scss'
const SocialIcons = () => {
  return <article className='socialIcons'>
<section>
    <NavLink to="https://github.com/RachidBR">
        {githubIcon}
    </NavLink>
    <NavLink to="https://www.linkedin.com/in/rachid-bouadi/">
        {linkedInIcon}
        
    </NavLink>
</section>
  </article>;
};

export default SocialIcons;
