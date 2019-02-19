import React from 'react';
import '../sass/main.scss';
import FormSimulacao from '../components/form-simulacao';
import GraphData from '../components/graph-data';


class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            invInicial: '',
            invMensal: '',
            prazo: '',
            txJuros: '',
            montante: 0,
            totalJuros: 0,
            dataChartAcumulado: [],
            dataChartJuros: [],
            dataChartDate: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInvestimentoInicial = this.handleInvestimentoInicial.bind(this);
        this.handleInvestimentoMensal = this.handleInvestimentoMensal.bind(this);
        this.handlePrazo = this.handlePrazo.bind(this);
        this.handleTaxaJuros = this.handleTaxaJuros.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        let tx = (this.state.txJuros/12) / 100;

        let acumulado = this.state.invInicial;
        let jurosTotal = 0;
        let arrayAcumulado = [];
        let arrayJuros = [];
        let arrayDate = [];
        for(let i = 0; i < this.state.prazo; i++){
            let juros = this.roundToTwo(acumulado * tx, 2);
            jurosTotal += juros;
            acumulado += this.state.invMensal + juros;

            arrayAcumulado.push(acumulado);
            arrayJuros.push(jurosTotal);
            arrayDate.push('Mês: ' + (i + 1));
            console.log('mês: ' + i + ' = ' + juros + ' : ' + acumulado);
        }
        this.setState({montante: acumulado});
        this.setState({totalJuros: jurosTotal});
        this.setState({dataChartAcumulado: arrayAcumulado});
        this.setState({dataChartJuros: arrayJuros});
        this.setState({dataChartDate: arrayDate});
    }
    handleInvestimentoInicial(event){
        this.setState({invInicial: parseFloat(event.target.value)});
    }
    handleInvestimentoMensal(event){
        this.setState({invMensal: parseFloat(event.target.value)});
    }
    handlePrazo(event){
        this.setState({prazo: parseInt(event.target.value)});
    }
    handleTaxaJuros(event){
        this.setState({txJuros: parseFloat(event.target.value)});
    }
    roundToTwo(num, digits) {    
        return +(Math.round(num + "e+"+digits)  + "e-"+digits);
    }

    render(){
        return(
            <div className="container app">
                <div className="row">
                    <div className="col-md-6">
                        <FormSimulacao iptInvInicial={this.handleInvestimentoInicial}
                                       iptInvMensal={this.handleInvestimentoMensal}
                                       iptPrazo={this.handlePrazo}
                                       iptJuros={this.handleTaxaJuros}
                                       onSubmit={this.handleSubmit}
                        />
                    </div>
                    <div className="col-md-6">
                        <GraphData montante={this.state.montante}
                                   totalJuros={this.state.totalJuros}
                                   listMontante={this.state.dataChartAcumulado}
                                   listJuros={this.state.dataChartJuros}
                                   listDate={this.state.dataChartDate}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;