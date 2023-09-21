import { Link } from "react-router-dom";
import './VideoItem.css'

export default function VideoItem({video}) {

	return (
		<>
			<Link to={`/watch/${video.id}`} className="card-link">
				<div className="card text-center">
					<img
						src={video.thumb}
						className="card-img-top"
						alt={video.title}
					/>
					<div className="card-body">
						<h5 className="card-title">{video.title}</h5>
						<p className="card-text">{video.subtitle}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
