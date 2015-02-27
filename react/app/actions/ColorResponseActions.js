'use strict';

import altFlux from '../altFlux';
import ColorResponseAPI from '../utils/api/ColorResponseAPI';

class ColorResponseActions {
  constructor() {
    this.generateActions(
      'receiveColorResponse',
      'stopColorResponsePolling',
      'startColorResponsePolling'
    );
  }

  initRequestColorResponse() {
    this.dispatch();
    this.actions.startColorResponsePolling();
    this.actions.requestColorResponse();
  }

  requestColorResponse() {
    ColorResponseAPI.getColorResponse().then((res) => {
      this.actions.receiveColorResponse(res.body);
    }).catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

export default altFlux.createActions(ColorResponseActions);
