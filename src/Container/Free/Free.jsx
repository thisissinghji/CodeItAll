import React from 'react'
import "./free.css";
import {Article, Navbar} from '../../Components';
import {Footer} from '../../Container';
import { img1,img2, img3,img4 } from './imports';
const Free = () => {
  return (
    <div>
      <Navbar/>
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          The best Free Resources are Here !
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupB">
            <Article imgURL="https://i.ytimg.com/vi/EAR7De6Goz4/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDPXaB-ig8Bwc1IV_sVhnv1J4O7Ng" externalLink="https://www.youtube.com/watch?v=EAR7De6Goz4&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" title="A2Z- DSA Course" />
            <Article imgURL="https://i.ytimg.com/vi/37E9ckMDdTk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAvvzfYREJRiPqOWyMZYlVmxqvn3Q" externalLink="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" title="Arrays- Basic to Advanced" />
            <Article imgURL="https://i.ytimg.com/vi/yVdKa8dnKiE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB4gfryRH4186NeLBh6TwNhGqiCUA" externalLink="https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9" title="Recursion-Basic to Advanced" />
            <Article imgURL="https://i.ytimg.com/vi/tyB0ztf0DNY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC8vBrSdV2pL3PBM-p-i2rI9fXiyA" externalLink="https://www.youtube.com/watch?v=tyB0ztf0DNY&list=PLgUwDviBIf0pwFf-BnpkXxs0Ra0eU2sJY" title="Dynamic Programming" />
            <Article imgURL='https://i.ytimg.com/vi/Vi9bxu-M-ag/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBzPGXvvPIHEzuJYAlNj85IO-5gbQ' externalLink="https://www.youtube.com/watch?v=Vi9bxu-M-ag&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD" title="Full Stack Web Development using MERN Stack " />
            <Article imgURL='https://i.ytimg.com/vi/eYpXCdvKwEQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCAJsiHMKRhwQU5aF1cPNstUe68pw' externalLink="https://www.youtube.com/watch?v=eYpXCdvKwEQ&list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU" title="DBMS Placements Course " />
            <Article imgURL="https://i.ytimg.com/vi/PGsgv6nXhLw/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCYdiAYXBQNsx2U33-wksvntpkqfQ" externalLink="https://www.youtube.com/watch?v=PGsgv6nXhLw&list=PLDzeHZWIZsTomOPnCiU3J95WufjE36wsb" title="Dynamic Programming" />
            <Article imgURL="https://i.ytimg.com/vi/EaK6aslcC5g/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDGbqOa3INxgqfchSHUe-akJc_ufA" externalLink="https://www.youtube.com/watch?v=EaK6aslcC5g&list=PLDzeHZWIZsTobi35C3I-tKB3tRDX6YxuA&pp=iAQB" title="Graph Series" />
            <Article imgURL="https://i.ytimg.com/vi/7wnove7K-ZQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMirEJX-r2pxI5nylJWpyclDDEcg" externalLink="https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&pp=iAQB" title="Python-Full Course" />
            <Article imgURL="https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCwzJcmIoU3vx1qKJoizHb5zpxzEg" externalLink="https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&pp=iAQB" title="Ultimate JavaScript" />
            <Article imgURL="https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDTf1GtV-FgHh66rtcxnUio_uQJCQ" externalLink="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&pp=iAQB" title="Reactjs Tutorials" />
            <Article imgURL="https://i.ytimg.com/vi/DZKOunP-WLQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLACx0ofEZrlzO8Gx40LosoeJbyOqA" externalLink="https://www.youtube.com/watch?v=DZKOunP-WLQ&list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG&pp=iAQB" title="Next.js Tutorials" />
            <Article imgURL="https://i.ytimg.com/vi/Y89q6T1r1Yg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAMJPiDzfUS5fHgaKzey2xJvN8V5Q" externalLink="https://www.youtube.com/watch?v=Y89q6T1r1Yg&list=PL6QREj8te1P5k_kIM2-8E4VP9Sej0Yez3&pp=iAQB" title="Master Web3, Solidity & Smart Contracts" />
            <Article imgURL="https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBFfdQR96LJ9EFfYgEVZWcGJ7efGA" externalLink="https://www.youtube.com/watch?v=0fYi8SGA20k&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&pp=iAQB" title="Master Reactjs" />
            <Article imgURL="https://i.ytimg.com/vi/ngc9gnGgUdA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC8T46ns4uy7nnh7ShC2lnj9tgvTw" externalLink="https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&pp=iAQB" title="Full stack MERN app" />
            <Article imgURL="https://i.ytimg.com/vi/QRrPE9aj3wI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBs0Zj4T3gjW8M6DVJswI01I_yTw" externalLink="https://www.youtube.com/watch?v=QRrPE9aj3wI" title="Responsice design using HTML,CSS,JS" />
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Free