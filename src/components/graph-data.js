import React from 'react';
import { Line } from 'react-chartjs-2';

class GraphData extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = {
            labels: this.props.listDate,
            datasets: [
              {
                label: 'Montante c/ Juros R$',
                data: this.props.listMontante,
                fill: false,          // Don't fill area under the line
                borderColor: '#392875'  // Line color
              },
              {
                label: 'Juros p/ Período R$',
                data: this.props.listJuros,
                fill: false,          // Don't fill area under the line
                borderColor: '#f4a63d'  // Line color
              }
            ]
        }

        const options = {
            maintainAspectRatio: false	// Don't maintain w/h ratio
        }

        return(
            <div className="graph">
                <h6 className="graph--amount">Montante acumulado: <span>R${this.props.montante}</span></h6>
                <h6 className="graph--juros">Juros acumulados: <span>R${this.props.totalJuros}</span></h6>

                <article className="canvas-container">
                    <Line data={data} options={options}/>
                </article>
            </div>
        );
    }
}

export default GraphData;