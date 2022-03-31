import React from 'react'
import styled from 'styled-components';

const IPContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
  text-decoration-color: 1px white;
`

const FilContainer = styled.div`
  border: 3px solid blue;
  padding: 12px;
`;



export class Filtros extends React.Component {
  render() {
    return <FilContainer>
      <h3>Filtros</h3>

        <IPContainer>
          Buscar nome:
          <input
            type="text"
            value={this.props.NomeFiltro}
            onChange={this.props.onChangeNomeFiltro}
          />
        </IPContainer>
        
        <IPContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.MaiorFiltro}
            onChange={this.props.onChangeMaiorFiltro}
          />
        </IPContainer>
        
        <IPContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.MenorFiltro}
            onChange={this.props.onChangeMenorFiltro}
          />
        </IPContainer>

        
    </FilContainer>
  }
}
