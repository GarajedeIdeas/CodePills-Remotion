import { useEffect, useState } from 'react';
import { Composition, continueRender, delayRender } from 'remotion';
import { Weather } from './Weather/Weather';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {

	const [data, setData] = useState(null);
	const [handle] = useState(() => delayRender());

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=madrid,es&appid=04f4f8762b4ce35df1c074d18b1e84ab&units=metric');
			const json = await response.json();
			const data = json.main;
			data.city = 'Madrid';

			setData(data);
			continueRender(handle);
		}
		fetchData();
	}, []);

	return (
		<>
			<Composition
				id="Weather"
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
				component={Weather}
				defaultProps={
					data
				}
			/>
		</>
	);
};
