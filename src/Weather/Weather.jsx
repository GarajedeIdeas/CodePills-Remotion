import { AbsoluteFill, Sequence } from "remotion"
import { Data } from "./Data";
import Title from "./Title";

export const Weather = (props) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
        background: "linear-gradient(150deg, #2980b9, #6dd5fa, #ffffff)"
      }}
    >
      <Sequence from={30}>
        <Title city={props.city} />
      </Sequence>
      <Sequence from={120}>
        <Data {...props} />
      </Sequence>
    </AbsoluteFill>
  );
}