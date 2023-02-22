import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import styled from "styled-components";
import dayjs from 'dayjs';

const Container = styled.div`
  width: 100%;
  padding: 0 100px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 85px;
  text-align: left;
  margin-top: 100px;
`;

const PSubtitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 90px;
  text-align: left;
`;

const Title = () => {

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Container>
      <PSubtitle
        style={{
          opacity: interpolate(frame, [0, 60], [0, 1])
        }}
      >el tiempo en</PSubtitle>
      <h2
        style={{
          margin: 0,
          transform: `scale(${spring({ fps, frame: frame - 40 })})`
        }}
      >Madrid</h2>
      <PSubtitle
        style={{
          transform: `translateX(${interpolate(
            frame - 60,
            [0, 20],
            [-700, 0],
            {
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp'
            }
          )}px)`,
        }}
      >{dayjs().format('DD-MM-YYYY')}</PSubtitle>
    </Container>
  );
}

export default Title;