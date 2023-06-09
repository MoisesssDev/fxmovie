import topGunImage from "assets/img/top-gun.png";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="container-blue">
          {/* <img src= {topGunImage} alt="" /> */}

          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={topGunImage} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={topGunImage} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={topGunImage} alt="..." />
              </div>
            </div>
          </div>

          {/* <a href="#">ver avaliações</a> */}
        </div>
        <div className="container-pink">
          <section className="title">
            Avalie, compartilhe e descubra o poder do cinema e da televisão em
            nosso site de avaliação de filmes e séries.
          </section>

          {/* <a href="#">
            Criar conta <img src={iconSeta} alt="" />
          </a> */}

          {/* <p>
            Não sabe o que assistir? Nosso site de avaliação de filmes e séries
            tem as melhores recomendações dos espectadores como você. Encontre
            seu próximo vício de streaming agora mesmo!
          </p> */}
        </div>
      </div>

      <h2>FX - Favorite experiences -</h2>
    </header>
  );
}

export default Header;
