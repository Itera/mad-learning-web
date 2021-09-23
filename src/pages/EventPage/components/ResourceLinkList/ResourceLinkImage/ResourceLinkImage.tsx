import React, { useState, useEffect } from 'react';
import { ResourceLink } from 'src/types/domain';
import defaultLink from 'src/assets/images/link.png';

function ResourceLinkImage({ name, url }: ResourceLink) {
  const [imageUrl, setImageUrl] = useState(defaultLink);

  const getLinkLogo = async (url: string) => {
    try {
      const hostName = new URL(url).hostname;
      const imgUrl = '//logo.clearbit.com/' + hostName + '?size=32';
      await fetch(imgUrl);
      setImageUrl(imgUrl);
    } catch (e) {
      if (e instanceof TypeError) {
        console.warn('URL seems to be invalid.');
      } else {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    getLinkLogo(url);
  }, [url]);

  return <img src={imageUrl} alt={name} />;
}

export default ResourceLinkImage;
