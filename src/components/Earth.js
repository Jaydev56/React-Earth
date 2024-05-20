import React from 'react'
import EarthDayMap from '../pics/8k_earth_daymap.jpg'
import EarthNormalMap from '../pics/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../pics/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../pics/8k_earth_clouds.jpg'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Camera, TextureLoader } from 'three'

export default function Earth(props) {
const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])

  return (
    <>
    <ambientLight intensity={3} />
    <mesh position={[0, 0, 0]}>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} rotateSpeed={0.4} panSpeed={0.5}/>
      <sphereGeometry  args={[2, 64, 64]}/>
      <meshPhongMaterial specularMap={specularMap} />
      <meshStandardMaterial map={colorMap} normalMap={normalMap}  />
    </mesh>
    </>
  )
}
