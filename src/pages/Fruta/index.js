import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';
import { data } from '../../data.js';
import { db } from '../../services/firebaseConnection'; 
import { collection, getDocs } from 'firebase/firestore';

function Fruta() {
  const frutas = data.filter(product => product.type === 'fruta');

  return (
    <div>
      <hr />
      <section className="categorias-quantidades">
        <span className="categorias-titulo">Frutas</span>
      </section>
      <hr />
      <main className="row produto-page">
        <div className="col-12">
          <div className="row">
            {frutas.map((product) => (
              <div key={product.id} className="produto-container-prisncipal">
                <div className="produto-prisncipal">
                  <Link to={`/paginapd/${product.id}`} >
                    <img src={product.image} alt={product.name} className="img-fluid" />
                  </Link>
                  <span>{product.name}</span>
                  <span>
                    R$ <span className="price">{product.price}</span> <span className="unit">{product.unit}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Fruta;