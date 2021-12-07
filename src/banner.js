import React from 'react';

import { useSpring,animated } from 'react-spring';
import "./banner.css";


const Banner =() =>{

    const fade = useSpring({
        from :{
            opacity:0,marginTop:-500
        },
        to:{
            opacity:1,marginTop:0
        }
    } );

    return(
        

        <animated.div className="top_banner " style={fade}>
            
           
            <p>
clearness or lucidity as to perception or understanding; freedom from indistinctness or ambiguity. the state or quality of being clear or transparent to the eye; pellucidity: the clarity of pure water.</p>
        
        </animated.div>


    )
};
export default Banner;