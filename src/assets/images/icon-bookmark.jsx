export const IconBookmark = ({ className, bgFill, iconFill }) => (
	<svg
		className={className}
		width="56"
		height="56"
		xmlns="http://www.w3.org/2000/svg">
		<g fill="none" fillRule="evenodd">
			{/* <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
			<path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" /> */}
			<circle className={bgFill} cx="28" cy="28" r="28" />
			<path className={iconFill} d="M23 19v18l5-5.058L33 37V19z" />
		</g>
	</svg>
);