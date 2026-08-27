// Header BS
const header = document.createElement('template');

header.innerHTML = `
  <div class="maincontent">
    <h1 style="display: flex; justify-content: center; text-align: center; align-items: center;">
      <img src="Images/close enough to my real pfp.gif">
      <a href="index.html"> BlendKitty's Corner </a>
      <img src="Images/close enough to my real pfp.gif">
    </h1>
    
    <h1 style="text-align: center;" font-size=font-size: 18px;>
      <a href="games.html">Stuff I'm Making</a> | 
      <a href="nerdystuff.html">Nerdy Stuff</a> | 
      <a href="finishedgames.html">Finished Games</a> |
      <a href="blogstuff.html">Blogs</a>
    </h1>
    <button id="darkmode-btn" class="darkmode-button">Toggle Dark Mode</button>
  </div>
`;

// Footer BS
const footer = document.createElement('template');

footer.innerHTML = `
  <div class="othercontent">
    <p style="display: flex; justify-content: center;">Psst... Check out these other cool sites... Pretty cool if i say so myself... (You can click on the images below!)</p>
    <div style="display: flex; justify-content: center;">
      <a href="https://lain.la"><img class="gallery-image" style="width:240px;height:60px;" src="Images/lainla.png"></a>  
      <a href="https://filegarden.com"><img class="gallery-image" style="width:240px;height:60px;" src="Images/filegarden.svg"></a></footer>
    </div>
  </div>
`;

// Add the BS
document.body.prepend(header.content);
document.body.appendChild(footer.content);