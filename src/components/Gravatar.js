import React from 'react';
import md5 from 'md5';

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);
  const urlSrc = `https://secure.gravatar.com/avatar/${hash}?d=identicon`;
  return <img className={props.className} src={urlSrc} />;
}

export default Gravatar;
