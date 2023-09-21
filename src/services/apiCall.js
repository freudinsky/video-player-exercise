import axios from "axios";

export async function videoFetch() {
	const uri =
		"https://gist.githubusercontent.com/freudinsky/6d9bf99bce107191ca033b1fb3eddff6/raw/00abfbdfe5fa16cf4b552ffc77898942e4582791/gistfile1.txt";

	try {
		const res = await axios.get(uri);
		if (res.status === 200) {
			const list = await res.data;
            return list
		} else {
			console.log("Request was not successful:", res.status);
		}
	} catch (err) {
		console.log("Error fetching data:", err);
	}
}

