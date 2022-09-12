import { GrPlayFill } from "react-icons/gr";

interface Props {
	title: string;
}

const Button: React.FC<Props> = (props) => {
	return (
		<button className="play">
			<GrPlayFill size={28} />
			{props.title}
		</button>
	);
};

export default Button;
