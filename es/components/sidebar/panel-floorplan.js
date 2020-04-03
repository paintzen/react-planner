var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './panel';

var tabStyle = { margin: '1em' };

var iconStyle = {
    fontSize: '14px',
    margin: '2px',
    cursor: 'pointer'
};

var addGuideStyle = {
    custor: 'pointer',
    height: '2em'
};

var tableTabStyle = {
    width: '100%',
    textAlign: 'center'
};

var PanelFloorplan = function (_Component) {
    _inherits(PanelFloorplan, _Component);

    function PanelFloorplan(props, context) {
        _classCallCheck(this, PanelFloorplan);

        var _this = _possibleConstructorReturn(this, (PanelFloorplan.__proto__ || Object.getPrototypeOf(PanelFloorplan)).call(this, props, context));

        _this.state = {};
        return _this;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return ()
    // }

    _createClass(PanelFloorplan, [{
        key: 'render',
        value: function render() {
            var state = this.props.state;
            var _context = this.context,
                projectActions = _context.projectActions,
                translator = _context.translator;


            return React.createElement(
                Panel,
                { name: 'Floorplan' },
                React.createElement(
                    'table',
                    { style: tableTabStyle },
                    React.createElement(
                        'tbody',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement('td', null)
                        )
                    )
                )
            );
        }
    }]);

    return PanelFloorplan;
}(Component);

export default PanelFloorplan;


PanelFloorplan.propTypes = {
    state: PropTypes.object.isRequired
};

PanelFloorplan.contextType = {
    translator: PropTypes.object.isRequired,
    projectActions: PropTypes.object.isRequired
};