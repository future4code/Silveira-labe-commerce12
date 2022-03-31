import React from 'react'
import { ProdutosAdd } from './produtosAdd';
import styled from 'styled-components';


const Produtos1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const Produtos2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`

const ProdutosDiv = styled.div`

`;

export class Produtos extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  getFiltroLista = () => {
    return this.props.produtos
      .filter((produtos) => this.props.MaiorFiltro ? produtos.preco < this.props.MaiorFiltro : true)
      .filter((produtos) => this.props.MenorFiltro ? produtos.preco > this.props.MenorFiltro : true)
      .filter((produtos) => this.props.NomeFiltro ? produtos.nome.includes(this.props.NomeFiltro) : true)
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.preco - b.preco : b.preco - a.preco)
  }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    const filtroLista = this.getFiltroLista()
    return <ProdutosDiv>
      <Produtos1>
        <p>Quantidade de produtos: {filtroLista.length}</p>
        <label>
          Organização:
          <select value={this.state.sort} onChange={this.onChangeSort}>
            <option value={'CRESCENTE'}>Crescente</option>
            <option value={'DECRESCENTE'}>Decrescente</option>
          </select>
        </label>
      </Produtos1>
      <Produtos2>
        {filtroLista.map((produtos) => {
          return <ProdutosAdd
            produtos={produtos}
            onAddProdutosCart={this.props.onAddProdutosCart}
          />
        })}
      </Produtos2>
    </ProdutosDiv>
  }
}
