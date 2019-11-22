import React from 'react';

import css from './Button.scss';

const Button = props => {
	let classes = [css.Btn, css.Btn];

	switch (props.color) {
		case 'green':
			classes.push(css.Btn__green);
			break;
		default:
			classes.push(css.Btn__white);
	}

	return (
		<a href="#" className={classes.join(' ')}>
			{props.text}
		</a>
	);
};

export default Button;
