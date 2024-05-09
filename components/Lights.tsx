import {useRef} from 'react';

const Lights: React.FC = ()=>{
        const lightRef = useRef<THREE.DirectionalLight>()

    return(
        <>
        <ambientLight  intensity={0.3}/>
        <directionalLight ref={lightRef} position={[0,10,10]}/>
        </>
    )
    
}

export default Lights;