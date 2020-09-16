import React from 'react';
import { Link } from '@reach/router';

import routes from '../../config/routes';

function NavMenu() {
  return (
    <nav>
      <ul>
        {routes.map(({ path, label }) => (
          <li key={path}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
