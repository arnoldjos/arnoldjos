import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProjectCard from "../UI/ProjectCard/ProjectCard";

import css from "./Projects.scss";

export default function Projects() {
	return (
		<section className={css.Projects} id="Projects">
			<Container>
				<Box mb="5rem" className={css.Projects__header}>
					<Typography variant="h1" component="h2">
						Projects
					</Typography>
				</Box>
				<Grid container spacing={3}>
					<Grid item sm={12} md={6}>
						<ProjectCard
							title="EM 4x24"
							technologies={[
								"Django",
								"Ionic",
								"MySQL",
								"Firebase",
								"Git"
							]}
							alt="Em 4x24 App"
							imagePath="/images/4x24.gif"
						/>
					</Grid>
					<Grid item sm={12} md={6}>
						<ProjectCard
							title="ArchIntel"
							technologies={[
								"Bootstrap",
								"jQuery",
								"SASS",
								"Git"
							]}
							alt="ArchIntel"
							imagePath="/images/archintel.gif"
						/>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
