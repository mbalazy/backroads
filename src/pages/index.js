import React from 'react';
import MainLayout from 'templates/MainLayout.component';

import MainHero from 'components/organisms/Home/MainHero.component';
import About from 'components/organisms/Home/About.component';
import Services from 'components/organisms/Home/Services.component';
import Featured from 'components/organisms/Home/Featured.component';

const Index = () => (
  <MainLayout>
    <MainHero />
    <main>
      <About />
      <Services />
      <Featured />
    </main>
  </MainLayout>
);

export default Index;
