import React from 'react';

import Hero from '../components/UI/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Page from '../layouts/main';

const Home = () => (
	<Page>
		<Hero />
		<About />
		<Skills />
	</Page>
);

export default Home;
