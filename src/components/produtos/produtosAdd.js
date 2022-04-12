import React from 'react'
import styled from 'styled-components';


const Card = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
`;

const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 5px 0;
  }
`

const AdicionarCart = styled.button`
  align-self: center;
  margin-top: 4px;
  color: black;
  background-color: aqua;
  
  &:hover {
    color: white;
    background-color: black;
  };

  &:active {
    color: red;
    background-color: white;
  };
  


`

export class ProdutosAdd extends React.Component {
  render() {
    
      
    
    const produtos = this.props.produtos
    return <Card>
      <img src={produtos.foto}/>
      <Informacoes>
        <p>{produtos.nome}</p>
        <p>US${produtos.preco},00</p>
        <AdicionarCart onClick={() => this.props.onAddProdutosCart(produtos.id)}>
          Adicionar ao carrinho
        </AdicionarCart>
      </Informacoes>
    </Card>
  }
}