import React from 'react'
import { Itens } from './itens';
import styled from 'styled-components';

const ListaCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const CartContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class Cart extends React.Component {
  getTotalValue = () => {
    let Subtotal = 0

    for(let produtos of this.props.produtosCart) {
      Subtotal += produtos.preco * produtos.quantidade
    }

    return Subtotal
  }

  render() {
    return <ListaCartContainer>
      <h3>Carrinho:</h3>
      <CartContainer>
        {this.props.produtosCart.map((produtos) => {
          return <ListaCartContainer 
                    cartItem={produtos} 
                    RemoveProdutosCart={this.props.RemoveProdutosCart}
                  />
        })}
      </CartContainer>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </ListaCartContainer>
  }
}
