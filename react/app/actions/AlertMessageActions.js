'use strict';

import altFlux from '../altFlux';

class AlertMessageActions {
  constructor() {
    this.generateActions(
      'receiveAlertSuccess',
      'receiveAlertInfo',
      'receiveAlertWarning',
      'receiveAlertDanger',
      'receiveAlertError'
    );
  }

  receiveAlertCustom(level, msg) {
    this.dispatch({level, msg});
  }

  notifyError(error) {
    this.dispatch();

    this.actions.receiveAlertError(error);
  }
}

export default altFlux.createActions(AlertMessageActions);
