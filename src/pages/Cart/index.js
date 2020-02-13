import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container> 
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <img src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ecb1fef47f5f465db1c0a80b015acabb_9366/Tenis_X_PLR_Preto_BY9879_01_standard.jpg" alt="tenis" />
            </td>
            <td>
              <strong>Tenis Adidas</strong>
              <span>R$300,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <MdAddCircleOutline size={20} color="#7159c1" />
              </div>
            </td>
            <td>
              <strong>R$600,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>

      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1234,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
