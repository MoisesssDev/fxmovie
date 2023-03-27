import topGunImage from "assets/img/top-gun.png";
import iconSeta from "assets/img/icons8-divisa-circulada-à-direita-64.png"
import './styles.css'

function NavBar() {
    return (
        <header>
      <div className="container-header">
      <nav>
        <h1>FX</h1>

        <div className="info">
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
        
      </nav>

      <div className="container-blue">
          <img src= {topGunImage} alt="" />

          <a href="#">
            ver avaliações
          </a>
      </div>
      <div className="container-pink">
          <section className="title">
          Avalie, compartilhe e descubra o poder do cinema e 
          da televisão em nosso site de avaliação de filmes e 
          séries.
          </section>

          <a href="#">Criar conta <img src={iconSeta} alt="" /></a>

          <p>
          Não sabe o que assistir? Nosso site de avaliação de 
          filmes e séries tem as melhores recomendações dos 
          espectadores como você. Encontre seu próximo vício de 
          streaming agora mesmo!
          </p>
      </div>
      </div>

      <h2>FX - Favorite experiences -</h2>
    </header>
    );
}

export default NavBar;