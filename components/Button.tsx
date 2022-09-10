import { GrPlayFill } from "react-icons/gr";

const Button: React.FC = ({ title }) => {
	return (
		<button className="play">
			<GrPlayFill size={28} />
			{title}
		</button>
	);
};

export default Button;
