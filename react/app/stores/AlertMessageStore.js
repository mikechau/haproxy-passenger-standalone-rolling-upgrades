'use strict';

import altFlux from '../altFlux';
import AlertMessageActions from '../actions/AlertMessageActions';
import UserDataActions from '../actions/UserDataActions';

class AlertMessageStore {
  constructor() {
    this.bindActions(AlertMessageActions);
    this.bindAction(UserDataActions.receiveUserData, this.clearAlert);
    this.bindAction(UserDataActions.receiveUserDataError, this.onReceiveAlertError);
    this.bindAction(UserDataActions.receiveUserOnboardingCheck, this.onReceiveAlertInfo);

    this._initDefaults();
  }

  onReceiveAlertSuccess(msg) {
    this._initGenericAlert('success', msg);
  }

  onReceiveAlertInfo(msg) {
    this._initGenericAlert('info', msg);
  }

  onReceiveAlertWarning(msg) {
    this._initGenericAlert('warning', msg);
  }

  onReceiveAlertDanger(msg) {
    this._initGenericAlert('danger', msg);
  }

  onReceiveAlertError(msg) {
    this._initErrorAlert(msg);
  }

  clearAlert() {
    this._initDefaults();
  }

  _initDefaults() {
    this.message = null;
    this.alertLevel = null;
    this.error = null;
    this.alertVisible = false;
    this.dismissAfter = null;
  }

  _initGenericAlert(lvl, msg) {
    this.alertLevel = lvl;
    this.message = msg;
    this.error = false;
    this.alertVisible = true;
    this.dismissAfter = 30000;
  }

  _initErrorAlert(msg) {
    this.alertLevel = 'danger';
    this.message = msg;
    this.error = true;
    this.alertVisible = true;
    this.dismissAfter = null;
  }
}

export default altFlux.createStore(AlertMessageStore);
