import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPercentage, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add({faDollarSign, faPercentage, faCalendar})

class FormSimulacao extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form className="form-simulacao" onSubmit={this.props.onSubmit}>
                <h2 className="form-simulacao--title">Calculadora de Juros Compostos</h2>
                <div className="form-group">
                    <label>Montante Inicial:</label>
                    <FontAwesomeIcon className="icon" icon={faDollarSign} />
                    <input className="form-control" type="number" onChange={this.props.iptInvInicial}/>
                </div>
                <div className="form-group">
                    <label>Investimento Mensal:</label>
                    <FontAwesomeIcon className="icon" icon={faDollarSign} />
                    <input className="form-control" type="number" onChange={this.props.iptInvMensal}/>
                </div>
                <div className="form-group">
                    <label>Período (em meses):</label>
                    <FontAwesomeIcon className="icon" icon={"calendar"} />
                    <input className="form-control" type="number" onChange={this.props.iptPrazo}/>
                </div>
                <div className="form-group">
                    <label>Taxa de Juros (anual):</label>
                    <FontAwesomeIcon className="icon" icon={faPercentage} />
                    <input className="form-control" type="text" onChange={this.props.iptJuros}/>
                </div>
                <button className="btn form-simulacao--button" type="submit">Calcular</button>
            </form>
        );
    }
}

export default FormSimulacao;