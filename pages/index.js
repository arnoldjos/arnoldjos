import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/UI/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Page from "../layouts/main";

const Home = () => (
	<React.Fragment>
		<Helmet>
			<title>Arnoldjos</title>
			<meta
				name="description"
				content="I am Arnold Joseph Fudolig, a Full Stack Web Developer. I made this site to showcase my skills as well as my past projects."
			/>
			<link rel="canonical" href="http://arnoldjoslive.com/" />
			<link rel="canonical" href="https://arnoldjoslive.com/" />
			<link rel="canonical" href="http://www.arnoldjoslive.com/" />
			<link rel="canonical" href="https://www.arnoldjoslive.com/" />
		</Helmet>
		<Page>
			<Hero />
			<About />
			<Skills />
			<Projects />
		</Page>
	</React.Fragment>
);

export default Home;
