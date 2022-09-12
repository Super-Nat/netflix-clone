import Image from "next/image";
import { baseUrl } from "../constants/movie";
interface Props {
	movie: { backdrop_path: string; name: string; title: string };
}

const Thumbnail: React.FC<Props> = (props) => {
	return (
		<div className="row__item">
			<Image
				src={`${baseUrl}${props.movie?.backdrop_path}`}
				layout="fill"
				alt={props.movie?.name || props.movie?.title}
				objectFit="cover"
			/>
		</div>
	);
};

export default Thumbnail;
