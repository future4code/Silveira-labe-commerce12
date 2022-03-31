import React from 'react'
import { Itens } from './itens';
import styled from 'styled-components';

const ListaCartContainer = styled.div`
  border: 4px solid white;
  padding: 10px;
`;

const CartContainer = styled.div`
  display: grid;
  gap: 12px;
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
          return <Itens 
                    cartItem={produtos} 
                    onRemoveProdutosCart={this.props.onRemoveProdutosCart}
                  />
        })}
      </CartContainer>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </ListaCartContainer>
  }
}
