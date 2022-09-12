import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { BiPlus, BiInfoCircle } from "react-icons/bi";
import Button from "./Button";

interface Props {
	trendingNow: [];
}

const Banner: React.FC<Props> = (props) => {
	const [movie, setMovie] = useState<any>(null);
	useEffect(() => {
		setMovie(
			props.trendingNow[Math.floor(Math.random() * props.trendingNow.length)]
		);
	}, [props.trendingNow]);

	console.log(movie);
	return (
		<div className="banner">
			<div className="wrapper">
				<Image
					src={`${baseUrl}${movie?.backdrop_path}`}
					layout="fill"
					alt={movie?.name || movie?.title}
					objectFit="cover"
				/>
				<div className="banner__backdrop"></div>
				<div className="banner__backdrop--bot"></div>
				<div className="banner__content">
					<h1>{movie?.name || movie?.title}</h1>
					<p>{movie?.overview}</p>
					<div className="banner__action">
						<div className="banner__btn">
							<Button title="Play" />
							<button className="circle">
								<BiInfoCircle size={40} />
							</button>
							<button className="circle">
								<BiPlus size={48} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
