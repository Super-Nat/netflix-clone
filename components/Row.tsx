import Thumbnail from "./Thumbnail";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface Props {
	title: string;
	movies: [];
}

const Row: React.FC<Props> = (props) => {
	return (
		<section className="row">
			<div className="wrapper">
				<h2>{props.title}</h2>
				<div className="row__btn row__btn--left">
					<BiChevronLeft size={60} />
				</div>
				<div className="row__wrapper">
					{props.movies.map((movie, index) => (
						<Thumbnail key={index} movie={movie} />
					))}
				</div>
				<div className="row__btn row__btn--right">
					<BiChevronRight size={60} />
				</div>
			</div>
		</section>
	);
};

export default Row;
