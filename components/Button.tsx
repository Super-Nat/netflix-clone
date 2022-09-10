import { GrPlayFill } from "react-icons/gr";

const Button = (title: any) => {
	return (
		<button className="play">
			<GrPlayFill size={28} />
			{title}
		</button>
	);
};

export default Button;
