import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import css from "./Skills.scss";
import FeatureCard from "../UI/FeatureCard/FeatureCard";

export default function Skills() {
	return (
		<section className={css.Skills} id="Skills">
			<Container maxWidth="xl">
				<Box mb="5rem" className={css.Skills__header}>
					<Typography variant="h1" component="h2">
						Skills
					</Typography>
				</Box>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={3}>
						<FeatureCard
							icon="languages"
							heading="Programming Languages"
							list={["Python", "JavaScript", "C#", "HTML & CSS"]}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<FeatureCard
							icon="frameworks"
							heading="Frameworks"
							list={["Django", "Flask", "React", "jQuery"]}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<FeatureCard
							icon="databases"
							heading="Databases"
							list={["MySQL", "Firebase", "SQLite"]}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<FeatureCard
							icon="tools"
							heading="Tools & Deployment"
							list={["Git", "Ubuntu", "Docker", "Nginx"]}
						/>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
