'use strict';

import altFlux from '../altFlux';
import UserDataActions from '../actions/UserDataActions';

class UserDataStore {
  constructor() {
    this.bindActions(UserDataActions);

    this.userData = {};
    this.userDataError = null;
  }

  onReceiveUserData(data) {
    this.userData = data;
    this.userDataError = null;
  }

  onReceiveUserDataError(error) {
    this.userDataError = error;
  }

  static getNavBarData() {
    let userData = this.getState().userData;
    return {
      username: userData.username,
      profileUri: userData.profileUri
    };
  }
}

export default altFlux.createStore(UserDataStore);
