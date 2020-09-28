import React from 'react';
import { Link } from '@reach/router';

import { Wrapper, Icon, Menu, MenuItem } from './styled';
import routes from '../../config/routes';
import logo from '../../assets/images/logo.png';

function Navbar() {
  return (
    <Wrapper>
      <Icon src={logo} alt="Itera logo" />
      <Menu>
        {routes.map(
          ({ path, label }) =>
            label && (
              <MenuItem key={path}>
                <Link to={path}>{label}</Link>
              </MenuItem>
            )
        )}
      </Menu>
    </Wrapper>
  );
}

export default Navbar;
