'use strict';

import altFlux from '../altFlux';
import ColorResponseActions from '../actions/ColorResponseActions';

class ColorResponseStore {
  constructor() {
    this.bindActions(ColorResponseActions);

    this.responses = [];
    this.polling = true;
  }

  onReceiveColorResponse(response) {
    if (this.responses.length >= 30) {
      this.responses.pop();
    }

    this.responses.unshift(response);
  }

  onStartColorResponsePolling() {
    this.polling = true;
  }

  onStopColorResponsePolling() {
    this.polling = false;
  }

  static isPolling() {
    return this.getState().polling;
  }
}

export default altFlux.createStore(ColorResponseStore);
