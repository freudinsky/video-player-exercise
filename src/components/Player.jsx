import { useParams } from "react-router-dom";
import { videoFetch } from "../services/apiCall";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function Player() {
	const [video, setVideo] = useState({});
	const { id } = useParams();

	useEffect(() => {
		async function vidFet(id) {
			try {
				const vids = await videoFetch();
				const video = vids.movies.find((video) => video.id === id);
				setVideo(video);
			} catch (err) {
				console.log("Error:", err);
			}
		}
		vidFet(id);
	}, []);

	return (
		<>
			<div className="player">
				{video.sources ? (
					<video className="video" poster={video.thumb} contols>
						<source src={video.sources} />
					</video>
				) : (
					<ColorRing
						visible={true}
						height="80"
						width="80"
						ariaLabel="blocks-loading"
						wrapperStyle={{}}
						wrapperClass="blocks-wrapper"
						colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
						className="spinner"
					/>
				)}
				<button className="controls">Pl</button>
				<button className="controls">Mu</button>
				<button className="controls"></button>
			</div>
		</>
	);
}
