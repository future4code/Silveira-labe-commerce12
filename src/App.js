import React from 'react';
import styled from 'styled-components'
import { Filtros } from './components/filtros/filtros';
import { Produtos } from './components/produtos/produtos';
import { Cart } from './components/cart/cart';


const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 25px;
  gap: 12px;
`;

const produtos = [
  {
    id: 1,
    nome: '',
    preco: '',
    foto: ''
  },
  {
    id: 2,
    nome: '',
    preco: '',
    foto: ''
  },
  {
    id: 3,
    nome: '',
    preco: '',
    foto: ''
  },
  {
    id: 4,
    nome: '',
    preco: '',
    foto: ''
  },
  {
    id: 5,
    nome: '',
    preco: '',
    foto: ''
  },
  {
    id: 6,
    nome: '',
    preco: '',
    foto: ''
  },
  {
    id: 7,
    nome: '',
    preco: '',
    foto: ''
  },
  {
    id: 8,
    nome: '',
    preco: '',
    foto: ''
  },
]

class App extends React.Component {
  state = {
    NomeFiltro: '',
    MenorFiltro: '',
    MaiorFiltro: '',
    
    produtosCart: [
     
     
    ]
  }

  onChangeMenorFiltro = (event) => {
    this.setState({MenorFiltro: event.target.value})
  }

  onChangeMaiorFiltro = (event) => {
    this.setState({MaiorFiltro: event.target.value})
  }

  onChangeNomeFiltro = (event) => {
    this.setState({NomeFiltro: event.target.value})
  }

  onAddProdutosCart = (produtosId) => {
    const produtosCart = this.state.produtosCart.find(produtos => produtosId === produtos.id)

    if(produtosCart) {
      const novosProdutosCart = this.state.produtosCart.map(produtos => {
        if(produtosId === produtos.id) {
          return {
            ...produtos,
            quantidade: produtos.quantidade + 1
          }
        }

        return produtos
      })

      this.setState({produtosCart: novosProdutosCart})
    } else {
      const produtosAdd = produtos.find(produtos => productId === produtos.id)

      const novosProdutosCart = [...this.state.novosProdutosCart, {...produtosAdd, quantidade: 1}]

      this.setState({produtosCart: novosProdutosCart})
    }
  }

  onRemoveProdutosCart = (produtosId) => {
    const novosProdutosCart = this.state.produtosCart.map((produtos) => {
      if(produtos.id === produtosId) {
        return {
          ...produtos,
          quantidade: produtos.quantidade - 1
        }
      }
      return produtos
    }).filter((produtos) => produtos.quantidade > 0)

    this.setState({produtosCart: novosProdutosCart})
  }

  render() {
    return (
      <StoreContainer>
        <Filtros
          MenorFiltro={this.state.MenorFiltro}
          MaiorFiltro={this.state.MaiorFiltro}
          NomeFiltro={this.state.NomeFiltro}
          onChangeMenorFiltro={this.onChangeMenorFiltro}            
          onChangeMaiorFiltro={this.onChangeMaiorFiltro}            
          onChangeNomeFiltro={this.onChangeNomeFiltro}                  
        />
        <Filtros 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          produtosCart={this.state.produtosCart}
          onRemoveProdutosCart={this.onRemoveProdutosCart}
        />
      </StoreContainer>
    );
  }
}

export default App;
