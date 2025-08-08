import Beams from './Beams.jsx'

export default function App() {
  return (
    <Beams
      beamWidth={2}
      beamHeight={15}
      beamNumber={12}
      lightColor="#ffffff"
      speed={2}
      noiseIntensity={1.75}
      scale={0.2}
      rotation={0}
    />
  )
}
