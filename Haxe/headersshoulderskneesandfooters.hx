package;

// I'll use this eventually when I add that cool sidebar

import js.Browser;
import js.html.TemplateElement;

class Main {
    static function main() {
        // Header BS
        var header:TemplateElement = cast Browser.document.createElement("template");
        
        header.innerHTML = '
          <div class="maincontent">
            <h1 style="display: flex; justify-content: center; text-align: center; align-items: center;">
              <img src="Images/close enough to my real pfp.gif">
              <a href="index.html"> BlendKitty\'s Corner </a>
              <img src="Images/close enough to my real pfp.gif">
            </h1>
            
            <div class="nav-links" style="display: flex; justify-content: center; gap: 15px; font-size: 18px; font-weight: bold;">
              <a href="games.html">Stuff I\'m Making</a> | 
              <a href="nerdystuff.html">Nerdy Stuff</a> | 
              <a href="finishedgames.html">Finished Games</a>
            </div>
          </div>
        ';

        // Footer BS
        var footer:TemplateElement = cast Browser.document.createElement("template");

        footer.innerHTML = '
          <div class="othercontent">
            <p style="display: flex; justify-content: center; text-align: center;">Psst... Check out these other cool sites... Pretty cool if i say so myself... (You can click on the images below!)</p>
            <div style="display: flex; justify-content: center; gap: 10px;">
              <a href="https://lain.la"><img class="gallery-image" style="width:240px;height:60px;" src="Images/lainla.png"></a>  
              <a href="https://filegarden.com"><img class="gallery-image" style="width:240px;height:60px;" src="Images/filegarden.svg"></a>
            </div>
          </div>
        ';

        // Add the BS to the DOM
        Browser.document.body.prepend(header.content);
        Browser.document.body.appendChild(footer.content);
    }
}