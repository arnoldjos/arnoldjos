import React from 'react';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import css from './Footer.scss';

export default function Footer() {
	const iconStyle = {
		width: 60,
		height: 60
	};

	return (
		<footer className={css.Footer}>
			<div className={css.Footer__logo_box}>
				{/* <img
					src="images/logo-green-2x.png"
					alt="Full logo"
					className="footer__logo"
				/> */}
			</div>

			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<div className={css.Footer__navigation}>
						<ul className={css.Footer__list}>
							<li className={css.Footer__item}>
								<a href="#AboutMe" className={css.Footer__link}>
									About Me
								</a>
							</li>
							<li className={css.Footer__item}>
								<a href="#" className={css.Footer__link}>
									Company
								</a>
							</li>
						</ul>
					</div>
				</Grid>
				<Grid item xs={12} sm={6}>
					<p className={css.Footer__sites}>
						<a href="https://github.com/arnoldjos" target="_blank">
							<GitHubIcon
								className={css.Footer__sites_icons}
								style={{ fontSize: '3rem' }}
							/>
						</a>
						<a href="https://www.linkedin.com/in/arnoldjos" target="_blank">
							<LinkedInIcon
								className={css.Footer__sites_icons}
								style={{ fontSize: '3rem' }}
							/>
						</a>
					</p>
				</Grid>
				<Grid item xs={12}>
					<p className={css.Footer__copyright}>
						&copy; Arnold Joseph Fudolig {new Date().getFullYear()}
					</p>
				</Grid>
			</Grid>
		</footer>
	);
}
