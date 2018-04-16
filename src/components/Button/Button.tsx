import * as React from "react";

interface ButtonProps {
	loading?: boolean;
	className?: string;
}

const Button: React.SFC<ButtonProps> = (props) => {
	return (
		<button className={props.className}>
			{props.loading && <i className="fa fa-circle-o-notch fa-spin" />}
			{!props.loading && props.children}
		</button>
	);
};

export default Button;
