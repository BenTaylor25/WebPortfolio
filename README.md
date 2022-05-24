
<h1>Web Portfolio</h1>

This is the first web project that I worked on. <br>
Late 2021, I found a YouTube tutorial for building web apps, and I decided to give it a go. I didn't end up learning much, as it was very do-this-now-do-this, but it gave me good exposure which helped when I decided to jump back into front end development in April 2022. As of May 2022, the project is 'finished', though as a portfolio, I hope to maintain it as I progress in my career.<br>

The site is live at this link: <br>
<u>https://bentaylor25.github.io/WebPortfolio/index.html</u>

![WebPortfolio](https://user-images.githubusercontent.com/97246704/170102131-2231b9a5-2672-41bf-9800-de804c3168d0.PNG)

<h2>File Structure</h2>

<h3><i>img</i> directory</h3>

This is where I store all of the images that appear in the site. <br>
This contains the <i>Logos</i> subdirectory which stores logos for affiliated companies.

<h3><i>src</i> directory</h3>

This is where I store all of the HTML, CSS, and JavaScript files that make up the site. <br>
There is a separate HTML file for each page. <br>
Every page uses `reset.css`, `navbar.css`, and `footer.css`, as well as the css file of the same name (i.e. `home.html` also uses `home.css`). <br>
I only have one JavaScript file: `hamburger.js`. The site is responsive, so narrower screens will see a hamburger menu instead of the four page tabs in the navbar. This file sets an onClick event listener on the hamburger to toggle the display.
