import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CodeIcon from "@material-ui/icons/Code";
import StorageIcon from "@material-ui/icons/Storage";
import WebIcon from "@material-ui/icons/Web";
import ComputerIcon from "@material-ui/icons/Computer";

import css from "./FeatureCard.scss";

export default function FeatureCard(props) {
	// const Icon = props.icon;
	let icon;
	const iconStyle = {
		fontSize: "5rem"
	};
	switch (props.icon) {
		case "languages":
			icon = <CodeIcon style={{ ...iconStyle }} />;
			break;
		case "frameworks":
			icon = <WebIcon style={{ ...iconStyle }} />;
			break;
		case "databases":
			icon = <StorageIcon style={{ ...iconStyle }} />;
			break;
		case "tools":
			icon = <ComputerIcon style={{ ...iconStyle }} />;
			break;
		default:
			icon = null;
	}

	return (
		<div className={css.FeatureCard}>
			<Box my="3rem">{icon}</Box>
			<Typography variant="h3" gutterBottom>
				{props.heading.toUpperCase()}
			</Typography>
			{/* <p className="feature-box__text">{props.text}</p> */}
			<ul className={css.FeatureCard__list}>
				{props.list.map(item => (
					<li key={item} className={css.FeatureCard__list_item}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
