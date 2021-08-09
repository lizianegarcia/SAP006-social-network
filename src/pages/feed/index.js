/* eslint-disable import/no-cycle */


const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
        <link rel="stylesheet" href="./pages/feed/style.css" />
        
        <header>
            <nav class="feed-navbar">
                <img class="feed-logo" src="./img/Amitié2.png" alt="">
                <div class="hamburger" id="hamburger">
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                </div>

                <ul class="navbar-links" id="navbar-links">
                    <li class="li-items"><a href="#">Bem vinda</a></li>
                    <li class="li-items"><a href="#">Perfil</a></li>
                    <li class="li-items"><a href="#">Feed</a></li>
                </ul>
            </nav>
        </header>
        
        <main class="feed-container">
        <section id="publish-feed" class="publish-feed">
            <img src="http://placehold.it/100x100" alt="avatar">
            <input type="text" name="twitterText" id="twitterText" class="twitter-text" placeholder="No que você está pensando?">
            <button id="publishBtn" class="publish-btn">Publicar</button>
        </section>

        <section id="post-feed" class="post-feed">
            <div class="post-feed-item">
                <img src="http://placehold.it/100x100" alt="user avatar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fas fa-heart" id="heart"></i>
            </div>

            <div class="post-feed-item">
                <img src="http://placehold.it/100x100" alt="user avatar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fas fa-heart" id="heart"></i>
            </div>

            <div class="post-feed-item">
                <img src="http://placehold.it/100x100" alt="user avatar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fas fa-heart" id="heart"></i>
            </div>

            <div class="post-feed-item">
                <img src="http://placehold.it/100x100" alt="user avatar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fas fa-heart" id="heart"></i>
            </div>

            <div class="post-feed-item">
                <img src="http://placehold.it/100x100" alt="user avatar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fas fa-heart" id="heart"></i>
            </div>

            <div class="post-feed-item">
                <img src="http://placehold.it/100x100" alt="user avatar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fas fa-heart" id="heart"></i>
            </div>

            <div class="post-feed-item">
                <img src="http://placehold.it/100x100" alt="user avatar">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fas fa-heart" id="heart"></i>
            </div>
        </section>
        </main>
    `;

  rootElement.innerHTML = contentnewElement;

    const hamburger = rootElement.querySelector('#hamburger');
    const navLinks = rootElement.querySelector('.navbar-links');
    const links = rootElement.querySelectorAll('.navbar-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        links.forEach(link => {
            link.classList.toggle('fade');
        });
    })


  return rootElement;
};

export default createPage;
