import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ecb1fef47f5f465db1c0a80b015acabb_9366/Tenis_X_PLR_Preto_BY9879_01_standard.jpg"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ecb1fef47f5f465db1c0a80b015acabb_9366/Tenis_X_PLR_Preto_BY9879_01_standard.jpg"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ecb1fef47f5f465db1c0a80b015acabb_9366/Tenis_X_PLR_Preto_BY9879_01_standard.jpg"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ecb1fef47f5f465db1c0a80b015acabb_9366/Tenis_X_PLR_Preto_BY9879_01_standard.jpg"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ecb1fef47f5f465db1c0a80b015acabb_9366/Tenis_X_PLR_Preto_BY9879_01_standard.jpg"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ecb1fef47f5f465db1c0a80b015acabb_9366/Tenis_X_PLR_Preto_BY9879_01_standard.jpg"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
