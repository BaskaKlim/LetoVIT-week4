import React, { Component } from 'react';


class Buttons extends Component {

    render() {
        const { finished } = this.props.todo;
        let finishedButton;
        if (!finished) {

            finishedButton = (<button type="button" class="btn btn-outline-success float-right">Hotovo</button>
            );
        }


        return (
            <>
                <button type="button" class="btn btn-outline-danger  float-left">Zmazat</button>
                {finishedButton}
            </>
        );
    }
}

export default Buttons;


