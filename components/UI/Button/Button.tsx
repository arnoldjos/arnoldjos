import React from 'react';

import css from './Button.scss';

const Button = props => {
	return (
		<a href="#" className="btn btn--white btn--animated">
			{props.text}
		</a>
	);
};

export default Button;
