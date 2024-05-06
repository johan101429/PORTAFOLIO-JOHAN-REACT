import React from 'react';
import SocialIcons from './SocialIconos.css';

export const App = () => {
  const links = [
    { name: 'Facebook', icon: 'facebook-f', url: 'https://www.facebook.com/' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/' },
  ];

  return (
    <div>
      <SocialIcons size={24} links={links} />
    </div>
  );
};


