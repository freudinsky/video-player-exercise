import { Routes, Route, NavLink } from "react-router-dom";
import Overview from './Overview'
import Player from "./Player";

export default function Home() {
	return <>
		<Routes>
			<Route path="/" element={<Overview/>} />
			<Route path="/watch/:id" element={ <Player /> } />
		</Routes>

	</>;
}
