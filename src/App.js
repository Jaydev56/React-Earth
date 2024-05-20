import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import Earth from './components/Earth';


const CanvasContainer = styled.div({
  width: Window.width,
  height: 755 ,
  backgroundColor: 'black'
});
  

export default function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}
