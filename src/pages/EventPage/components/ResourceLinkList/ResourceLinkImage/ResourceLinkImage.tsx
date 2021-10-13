import React, { useState, useEffect } from 'react';
import { ResourceLink } from 'src/types/domain';
import { fetchLogo } from 'src/api/logo';
import defaultLink from 'src/assets/images/link.png';

function ResourceLinkImage({ name, url }: ResourceLink) {
  const [imageUrl, setImageUrl] = useState(defaultLink);

  const getLinkLogo = async () => {
    const logoUrl = await fetchLogo(url);
    setImageUrl(logoUrl);
  };

  useEffect(() => {
    getLinkLogo();
  }, [url]);

  return <img src={imageUrl} alt={name} />;
}

export default ResourceLinkImage;
