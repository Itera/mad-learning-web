import React from 'react';
import { Link } from '@reach/router';

import MenuLink from './MenuLink';
import { Wrapper, Icon, Menu, MenuItem } from './styled';
import routes from 'src/config/routes';
import logo from 'src/assets/images/logo.svg';

function Navbar() {
  return (
    <Wrapper>
      <Link to="/">
        <Icon src={logo} alt="Itera logo" />
      </Link>
      <Menu>
        {routes.map(
          ({ path, label }) =>
            label && (
              <MenuItem key={path}>
                <MenuLink path={path} label={label} />
              </MenuItem>
            )
        )}
      </Menu>
    </Wrapper>
  );
}

export default Navbar;
