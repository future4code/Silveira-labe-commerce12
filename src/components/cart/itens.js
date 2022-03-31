import React from 'react'
import styled from 'styled-components';

const ItensContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  align-items: center;

  p {
    margin: 0;
  }
`


export class Itens extends React.Component {
  render() {
    return <ItensContainer>
      <p>{this.props.cartItem.quantidade}x</p>
      <p>{this.props.cartItem.nome}</p>
      <button 
        onClick={() => this.props.onRemoveProdutosCart(this.props.cartItem.id)}
      >
        Remover
      </button>
    </ItensContainer>
  }
}
