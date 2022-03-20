import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href='https://github.com/MarieBaude' target="_blank"><BsGithub /></a>
        </div>

        <div>
            <a href='https://www.linkedin.com/in/baudemarie/' target="_blank"><BsLinkedin /></a>
        </div>

        <div>
            <a href='https://twitter.com/MarieBaude95' target="_blank"><BsTwitter /></a>
        </div>

        <div>
            <a href='https://www.facebook.com/marie.baude.9026' target="_blank"><FaFacebookF /></a>
        </div>

        <div>
            <a href='https://www.instagram.com/mariebaude95/' target="_blank"><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia;