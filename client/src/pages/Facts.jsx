import { getImage } from '../utils/utils'
import habitat from "../assets/habitat.jpg";
import diet from "../assets/diet.webp";
import biology from "../assets/biology.jpg";

const Facts = () => {
    
    return(
        <main>
            <div class="content">
            <div class="left">
                <div class="fact1 text" >
                    <h2>Habitat</h2>
                    <p>
                        The giant panda is native to central China. They are often found in the mountains and temperate bamboo forests.
                    </p>
                </div>
                <div class="pic1">
                <img alt="preview image" src={habitat}/>  
                </div>
            </div>
            <div class="center">
                <div class="pic2">
                <img alt="preview image" src={diet}/>
                </div>
                <div class="fact2 text">
                    <h2>Diet</h2>
                    <p>
                        A panda's  diet often consists of leaves, and the stems and shoots of bamboo. Bamboo does not contain much nutritional value, so pandas often have to eat between 12 and 38 kilograms (26 to 83 pounds) of food every day. 
                    </p>
                </div>
            </div>
            <div class="right">
                <div class="fact3 text">
                    <h2>Biology</h2>
                    <p>
                        The average panda is about 2-3 feet tall when on all four paws, or 4-6 feet when standing on their hind legs. They also weigh between 68 and 100 kilograms. (150 and 220 pounds). Panda’s have developed a thick coat of fur to keep warm in the mountains and forests they live in. They also have large molars and strong jaws in order to eat bamboo, their primary food source.
                    </p>
                </div>
                <div class="pic3">
                <img alt="preview image" src={biology}/>      
                </div>
            </div>
        </div>
        </main>
    )
}

export default Facts;
