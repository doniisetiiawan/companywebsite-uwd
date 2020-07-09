import React from 'react';
import { Route } from 'react-router-dom';
import PageTemplate from './pageTemplate';
import AboutMenu from './about/aboutMenu';
import Company from './about/company';
import History from './about/history';
import Services from './about/services';
import Location from './about/location';

export default function About() {
  return (
    <PageTemplate>
      <section className="about">
        <Route component={AboutMenu} />
        <Route exact path="/about" component={Company} />
        <Route path="/about/history" component={History} />
        <Route
          path="/about/services"
          component={Services}
        />
        <Route
          path="/about/location"
          component={Location}
        />
      </section>
    </PageTemplate>
  );
}
