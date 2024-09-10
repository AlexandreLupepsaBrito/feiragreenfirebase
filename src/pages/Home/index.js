import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import { data } from '../../data';
import { useState } from 'react';

function Home() {
  const promocao = data.filter((product) => product.type === 'fruta');
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid"> {/* Removed extra divs */}

      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
              <Carousel.Item>
                <img 
                  src="/imagens/baner_I.png"
                  className="d-block "
                  alt="Banner I" 
                  width={'100%'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  src="/imagens/baner_II.png"
                  className="d-block" 
                  alt="Banner II" 
                  width={'100%'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  src="/imagens/baner_III.png"
                  className="d-block" 
                  alt="Banner III" 
                  width={'100%'}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <hr />

      <div className="container-fluid">
        <section className="promocao-header col-12 mb-0">
          <span className="promocao-header-title">PROMOÇÕES</span>
          <span>Produtos</span>
        </section>
      </div>

      <hr />

      <main className="row produto-page">
        <div className="col-12">
          <div className="row">
            {promocao.map((product) => (
              <div key={product.id} className="produto-container-prisncipal"> 
                <div className="produto-prisncipal">
                  <Link to={`/paginapd/${product.id}`}> 
                    <img src={product.image} alt={product.name} className="img-fluid" />
                  </Link>
                  <span>{product.name}</span>
                  <span>
                    R$ <span className="price">{product.price.toFixed(2)}</span> <span className="unit">{product.unit}</span> 
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div> // Removed extra divs

  );
}

export default Home;