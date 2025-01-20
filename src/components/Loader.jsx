import { Html } from '@react-three/drei'
import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div>
        <ClimbingBoxLoader color='#fff3f3'/>
        </div>
      </div>
    </Html>
  )
}

export default Loader