import React from "react";

import css from "./ProjectCard.scss";

export default function ProjectCard(props) {
	return (
		<div className={css.Card}>
			<div className={[css.Card__side, css.Card__side__front].join(" ")}>
				<h4 className={css.Card__heading}>{props.title}</h4>
				<div className={css.Card__details}>
					<h5 style={{ textAlign: "center" }}>Technologies Used</h5>
					<ul>
						{props.technologies.map(tech => (
							<li key={tech}>{tech}</li>
						))}
					</ul>
				</div>
			</div>
			<div className={[css.Card__side, css.Card__side__back].join(" ")}>
				<img
					src={props.imagePath}
					alt={props.alt}
					className={css.Card__image}
				/>
			</div>
		</div>
	);
}
