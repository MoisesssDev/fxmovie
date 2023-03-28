import { ReactComponent as IconStar } from "assets/img/icon-star.svg";
import MovieCard from "components/MovieCard";
import "./styles.css";
import Pagination from "components/Pagination";

function Catalog() {
  return (
    <div className="catalog">
      <div className="fxmovie-catalog-text">
        <IconStar />
        <p>
          embarque na Millennium Falcon e viaje para uma galáxia muito, muito
          distante, cheia de ação e aventura!!!
        </p>
      </div>

      <div className="fxmovie-catalog-container">
        <div className="container">
          <Pagination />
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
              <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
              <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
              <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
              <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
              <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
              <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
              <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
