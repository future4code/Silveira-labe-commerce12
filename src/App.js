import React from 'react';
import styled from 'styled-components'
import { Filtros } from './components/filtros/filtros';
import { Produtos } from './components/produtos/produtos';
import { Cart } from './components/cart/cart';
import falcon9 from './img/falcon9.png'
import falconH from './img/falconH.jpg'
import starship24 from './img/starship24.jpg'
import soyuz from './img/soyuz.jpg'
import vega from './img/vega.jpg'
import sls from './img/sls.jpg'
import atlasv from './img/atlasv.jpg'
import electron from './img/electron.jpg'

const StoreContainer = styled.div`
  display: flex;
  flex-direction: table;

  padding: 12px;
  gap: 6px;
  background-image: url(https://wallpapercave.com/wp/wp9141051.jpg);
  background-color: aqua;
  background-size: 3840px × 2160px;
`;
 
const Cabeça = styled.div`
display: grid;
grid-template-columns: 2fr;

`



const produtos = [
  {
    id: 1,
    nome: 'Falcon 9',
    preco: 75000000.00,
    foto: falcon9,
  },
  {
    id: 2,
    nome: 'Falcon Heavy',
    preco: 125000000.00,
    foto: falconH
  },
  {
    id: 3,
    nome: 'Starship',
    preco: 20000000.00,
    foto: starship24
  },
  {
    id: 4,
    nome: 'Soyuz',
    preco: 150000000.00,
    foto: soyuz
  },
  {
    id: 5,
    nome: 'Vega',
    preco: 500000000.00,
    foto: vega
  },
  {
    id: 6,
    nome: 'SLS',
    preco: 2000000000.00,
    foto: sls
  },
  {
    id: 7,
    nome: 'Atlas V',
    preco: 350000000.00,
    foto: atlasv
  },
  {
    id: 8,
    nome: 'Electron',
    preco: 65000000.00,
    foto: electron
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
      const produtosAdd = produtos.find(produtos => produtosId === produtos.id)

      const novosProdutosCart = [...this.state.produtosCart, {...produtosAdd, quantidade: 1}]

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
      
      <Cabeça>
       <title>Lojinha de Foguetinhos</title>
      <StoreContainer>
        
        <Filtros
          MenorFiltro={this.state.MenorFiltro}
          MaiorFiltro={this.state.MaiorFiltro}
          NomeFiltro={this.state.NomeFiltro}
          onChangeMenorFiltro={this.onChangeMenorFiltro}            
          onChangeMaiorFiltro={this.onChangeMaiorFiltro}            
          onChangeNomeFiltro={this.onChangeNomeFiltro}                  
        />
       
        <Produtos 
          
          produtos={produtos}
          MenorFiltro={this.state.MenorFiltro}
          MaiorFiltro={this.state.MaiorFiltro}
          NomeFiltro={this.state.NomeFiltro}
          onAddProdutosCart={this.onAddProdutosCart}
        />
        <Cart
          produtosCart={this.state.produtosCart}
          onRemoveProdutosCart={this.onRemoveProdutosCart}
        />
      </StoreContainer>
      </Cabeça>
    );
  }
}

export default App;
