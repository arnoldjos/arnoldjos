import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import css from "./About.scss";

export default function About() {
	return (
		<Container className={css.About}>
			<Box mb="5rem" className={css.About__header} id="AboutMe">
				<Typography variant="h1" component="h2">
					About Me
				</Typography>
			</Box>
			<Typography variant="h4" className={css.About__sub_header}>
				I have an interest in learning new technologies especially in
				the field of Web Development and continuously practice the
				skills that I have learned in order to further enhance them.
			</Typography>
		</Container>
	);
}
