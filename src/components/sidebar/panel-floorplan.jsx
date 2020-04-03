import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './panel';

const tabStyle = { margin: '1em' };

const iconStyle = {
    fontSize: '14px',
    margin: '2px',
    cursor: 'pointer'
};

const addGuideStyle = {
    custor: 'pointer',
    height: '2em'
};

const tableTabStyle = {
    width: '100%',
    textAlign: 'center'
};

export default class PanelFloorplan extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {

        };
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return ()
    // }

    render() {
        let { state } = this.props;
        let { projectActions, translator } = this.context;

        return (
            <Panel name={'Floor Plan'}>
                <table style={tableTabStyle}>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </Panel>
        );
    }
}

PanelFloorplan.propTypes = {
    state: PropTypes.object.isRequired
};

PanelFloorplan.contextTypes = {
    translator: PropTypes.object.isRequired,
    projectActions: PropTypes.object.isRequired
};