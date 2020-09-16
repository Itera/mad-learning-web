import React from 'react';
import { Link } from '@reach/router';

import { Menu, MenuItem } from './styled';
import routes from '../../config/routes';

function NavMenu() {
  return (
    <nav>
      <Menu>
        {routes.map(({ path, label }) => (
          <MenuItem key={path}>
            <Link to={path}>{label}</Link>
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
}

export default NavMenu;
