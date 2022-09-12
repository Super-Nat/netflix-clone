import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import requests from "../utils/requests";

const Home: NextPage = (props: any) => {
	return (
		<>
			<Head>
				<title>Home - Netflix</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<Banner trendingNow={props.trendingNow} />
				<Row title="Netflix Originals" movies={props.netflixOriginals} />
				<Row title="Trending Now" movies={props.trendingNow} />
				<Row title="Top Rated" movies={props.topRated} />
				<Row title="Action Movies" movies={props.actionMovies} />
				<Row title="Comedy Movies" movies={props.comedyMovies} />
				<Row title="Horror Movies" movies={props.horrorMovies} />
				<Row title="Romance Movies" movies={props.romanceMovies} />
				<Row title="Documentaries" movies={props.documentaries} />
			</main>
		</>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const [
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries,
	] = await Promise.all([
		fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
		fetch(requests.fetchTrending).then((res) => res.json()),
		fetch(requests.fetchTopRated).then((res) => res.json()),
		fetch(requests.fetchActionMovies).then((res) => res.json()),
		fetch(requests.fetchComedyMovies).then((res) => res.json()),
		fetch(requests.fetchHorrorMovies).then((res) => res.json()),
		fetch(requests.fetchRomanceMovies).then((res) => res.json()),
		fetch(requests.fetchDocumentaries).then((res) => res.json()),
	]);

	return {
		props: {
			netflixOriginals: netflixOriginals.results,
			trendingNow: trendingNow.results,
			topRated: topRated.results,
			actionMovies: actionMovies.results,
			comedyMovies: comedyMovies.results,
			horrorMovies: horrorMovies.results,
			romanceMovies: romanceMovies.results,
			documentaries: documentaries.results,
		},
	};
};
