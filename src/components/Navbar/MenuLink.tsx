import React from 'react';
import { Link } from '@reach/router';

type MenuLink = {
  path: string;
  label: string;
};

function MenuLink({ path, label }: MenuLink) {
  return (
    <Link
      to={path}
      getProps={({ isCurrent }) =>
        isCurrent && {
          style: {
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
          },
          disabled: true,
        }
      }
    >
      {label}
    </Link>
  );
}

export default MenuLink;
