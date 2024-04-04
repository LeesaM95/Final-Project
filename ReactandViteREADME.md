# React + Vite

## Installation for Local Host

The project will require several steps to run properly. First and foremost, if you don't have the code already on your device of choice, a `git clone` will be necessary, and a `git pull` for the newest update should you already have the code. As the project runs with React and Vite, you'll have to open up the terminal in the **main folder** of the project, then run `npm install && npm run seed && npm run build` if you're *just* wanting to open it via a localhost link. 

## Running the Project on Render

Peace For Pandas, is, of course, deployed on Render, so it's a bit of a pain, but it's running smoothly as of right now. I've had to set up a couple environment variables and some start commands so it runs correctly on Render. 


**MONGODB**: 
             The information for users is compiled using MongoDB Atlas, so I've had to link the database to Render under Environment. 
             This requires a key and a link with some specific information plugged in. The `Key` is `MONGODB_URI` and the value is
             `mongodb+srv://admin:root@cluster0.1vwvdjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`. If, for some reason, the entire thing just decides to disappear from the environment list, this is here to plug it back in.


**NODE**:    
             I specified which Node Version this thing should run off of so that way there it never decides to randomly downgrade and ruin all of our  hard work. The `Key` for this one is `NODE_VERSION` and the value is `20.10.0`. Again, just in case Render decides to simply Give Up™, this is here to plug back in.

**PORT**:
             Lastly, I specified the Port for the application to run on so it matches what we have in our server code. The `Key` is `PORT` and the value is `3001`. The usual. 

**COMMANDS**:
             The application runs from our Main Branch on GitHub to Render, and runs on the Build Command of `npm run render-build`, which, in our root package.json, is `npm i && npm run build` so it actually functions without deciding to lose its ever-loving mind. The Start Command is `npm run start`, so we'll need to keep that in mind. 

**RENDER DEPLOYMENT LINK**:
             Our project should be working just fine, but in the case that it needs to be updated, and for us to see the changes Live for any sort of bugs that may crop up, the link to the deployed project is `https://peace-for-pandas.onrender.com`. 

Hopefully nothing catastrophic happens to the link or the site, but in the event that it does, we have everything here to fix it and deploy it, as well as where, and how, to see any problems should (and will, let's be real) arise.