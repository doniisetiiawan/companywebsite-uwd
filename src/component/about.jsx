import React from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import PageTemplate from './pageTemplate';

export default function About() {
  const location = useLocation();
  return (
    <PageTemplate>
      <section className="about">
        <div className="about-menu">
          <li>
            <NavLink to="/about">[Company]</NavLink>
          </li>
          <li>
            <NavLink to="/about/history">[History]</NavLink>
          </li>
          <li>
            <NavLink to="/about/services">
              [Services]
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/location">
              [Location]
            </NavLink>
          </li>
        </div>
        {location.pathname === '/about' && (
          <section className="company">
            <h2>About the Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed
              nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent
              mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu
              eget nulla. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur sodales ligula
              in libero.
            </p>
            <p>
              Sed dignissim lacinia nunc. Curabitur tortor.
              Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis
              tristique sem. Proin ut ligula vel nunc
              egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce
              ac turpis quis ligula lacinia aliquet. Mauris
              ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque
              volutpat condimentum velit. Class aptent
              taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </section>
        )}
        <Outlet />
      </section>
    </PageTemplate>
  );
}
