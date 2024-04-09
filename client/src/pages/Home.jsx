/* eslint-disable react/no-unescaped-entities */
// import { useQuery } from '@apollo/client';
// import styled from 'styled-components';
// import { getImage } from "../utils/utils";
import panda2 from "../assets/panda2.jpg";

const Home = () => {
  
    return (
        <main>
            <div style={{display: "flex", width: "100%"}}>
                <div style={{flex: 1, margin: "40px 40px 10px 15px", textAlign: "justify", width: "500px", height: "600px", fontSize: "25px", color: 'white', fontFamily: "monospace"}}>
                Recently the International Union for Conservation of Nature upgraded wild pandas' status from 'endangered' to 'vulnerable'. There are just over 1800 pandas in the wild. Pandas live primarily in temperate forests in the mountains of southwest China. Pandas consume between 26-84 lbs of bamboo daily. Pandas are threatened by humans whose infrastructure developments divide panda populations. This prevents pandas from finding new bamboo sources and mates. Deforestation is another threat to pandas, as this forest loss reduces access to the bamboo pandas need to survive.
                </div>
                <div style={{flex: 1, marginRight: "20px", marginTop: "20px", border: "solid 2px"}}>
                    <img src={panda2} alt="panda-picture"/>
                </div>
            </div>
        </main>
    );
  };
  
  export default Home;
