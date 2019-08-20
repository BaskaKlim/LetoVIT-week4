import React, { Component } from 'react';
import Buttons from './Buttons';
import axios from '../axios';


class Todo extends Component {

    handleFinish = async () => {
        await axios.patch('/todos/' + this.props.todo.id + '.json', {
            finished: true
        });
        this.props.onFinish()

    };
    // 
    handleRemove = async () => {
        await axios.delete('/todos/' + this.props.todo.id + '.json');
        this.props.onRemove()
    };

    render() {
        // robim dynamicky prvok cize todo aby sa mi vedelo menit preto si ho vytvorim ako konstantu s atrobutmi
        const { title, createdAt, text, finished } = this.props.todo;

        return (

            <div className="todo mb-2" style={{ display: "inline-flex", margin: "1em" }}>
                {/* /pozor na zapis style toto berie ako objekt cize 2x kucerave zatvorky a este width bez uvodzoviek  + ak chcem pridat podmienku na ramcek border card tak si musim napisat if podmienku ku tejto 
                class  a v podobe stringu preto tie backsticky  a ak card je podmienka: finish zbehneme mi ukon border -succes ak nie je splnena podmienka, nezbehne. Je to vraj uplne skratene IF syntakticky (google it)  */}
                <div className={`card ${finished && ' border-success'}`} style={{ width: "18rem" }}>

                    <div className="card-body">
                        <div className="card-header">
                            <h5 className="card-title">
                                {/* kedze si ho davama ako dynamicky prepisujem konkretny text Nakupny zoznam objektom co viem menit */}
                                {title}</h5>

                            <h6 className="card-subtitle mb-2 text-muted" style={{ margin: "1em" }}>
                                Vytvorene {createdAt}
                            </h6>
                        </div>
                        {text ?
                            <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} >

                            </div> : null

                        }
                        <br />
                        {/* treba pridat buttons propku na onfinish a onremove */}
                        <Buttons todo={this.props.todo} onFinish={this.handleFinish} onRemove={this.handleRemove} />

                    </div >

                </div>
            </div>
        );
    }
}
export default Todo;


