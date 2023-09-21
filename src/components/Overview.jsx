import { useEffect, useState } from "react";
import { videoFetch } from "../services/apiCall";
import VideoItem from "./VideoItem";


export default function Overview(){
    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function vidFet(){
            try{
                const vids = await videoFetch();
                setVideos(vids.movies)
            }catch(err){
                console.log("Error:", err)
            }
        }
        vidFet()
    },[])

    return (
			<>
				<div className="card-container">
					{videos.map((video) => (
						<VideoItem key={crypto.randomUUID()} video={video} />
					))}
				</div>
			</>
		);
}