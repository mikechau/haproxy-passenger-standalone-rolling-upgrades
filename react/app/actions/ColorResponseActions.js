'use strict';

import altFlux from '../altFlux';
import ColorResponseAPI from '../utils/api/ColorResponseAPI';
// import ColorResponseStore from '../stores/ColorResponseStore';

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
    // this.dispatch();

    ColorResponseAPI.getColorResponse().then((res) => {
      console.log(res);

      this.actions.receiveColorResponse(res.body);

      // if (ColorResponseStore.isPolling()) {
        // this.actions.requestColorResponse();
      // }
    }).catch((err) => {
      if (err) {
        console.log(err);
      }
    });


    // this.actions.receiveColorResponse({ time: new Date() });
  }
}

export default altFlux.createActions(ColorResponseActions);
