'use strict';

import React from 'react';
import ListenerMixin from 'alt/mixins/ListenerMixin';

import { State as RouterState } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import ColorResponseActions from '../../actions/ColorResponseActions';
import ColorResponseStore from '../../stores/ColorResponseStore';

var Home = React.createClass({
  mixins: [RouterState, ListenerMixin],

  getInitialState() {
    return ColorResponseStore.getState();
  },

  componentWillMount() {
    this.listenTo(ColorResponseStore, this._onChange);
  },

  componentDidUpdate() {
    if (this.state.polling) {
      ColorResponseActions.requestColorResponse();
    }
  },

  _onChange() {
    this.setState(this.getInitialState());
  },

  render() {
    return(
      <Grid>
        <Row>
          <Col md={12}>
            <ul className="list-unstyled">
              {
                this.state.responses.map(function(response, index) {
                  return (
                    <li key={index} className={response.color}>
                      <p><h2><strong>{response.color}</strong> | <small>APP ID:</small> {response.id} | <small style={{ color: '#444' }}>TIME: {response.time}</small></h2></p>
                    </li>
                  );
                })
              }
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  },
});

export default Home;
