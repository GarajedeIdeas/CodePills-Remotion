import { interpolate, useCurrentFrame } from "remotion";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 150px;
  flex-direction: column;
  font-size: 60px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  justify-content: center;
  margin-top: 850px;
  height: 600px;
  color: black;
`

export const Data = (props) => {

  const frame = useCurrentFrame();

  return (<Container style={{
    opacity: interpolate(frame, [0, 60], [0, 1])
  }}>
    <div>
      <p>Temperatura</p>
      <p>🌡️ {props.temp}ºC</p>
    </div>
    <div>
      <p>Temperatura Máxima</p>
      <p>🔥 {props.temp_max}ºC</p>
    </div>
    <div>
      <p>Temperatura Mínima</p>
      <p>❄️ {props.temp_min}ºC</p>
    </div>
    <div>
      <p>Humedad</p>
      <p>💧 {props.humidity}%</p>
    </div>
  </Container>);
}