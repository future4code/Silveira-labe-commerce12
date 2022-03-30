import React from 'react'
import styled from 'styled-components';

const FilContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const IPContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`

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
