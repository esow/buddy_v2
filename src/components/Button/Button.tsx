import * as React from "react";

interface ButtonProps {
}

const Button: React.SFC<ButtonProps> = (props) => {
	return <button>{props.children}</button>;
};

export default Button;
