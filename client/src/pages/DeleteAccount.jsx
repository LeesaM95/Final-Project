import { useQuery } from '@apollo/client'

import panda2 from "../assets/panda2.jpg";


const DeleteAccount = () => {
    
    return(
        <main>
            <div class="content">
            <h1>Are you sure you want to delete your account?</h1>
            <div class="buttons">
                <button id='confirm' type="button">Yes</button>
                <button id='decline' type="button">No</button>
            </div>
            <br/>
            <input type="file" onChange={onImageChange} className="filetype" />
            <img alt="sad panda :(" src={panda2}/>
        </div>  
    </main>
    )
}

export default DeleteAccount;