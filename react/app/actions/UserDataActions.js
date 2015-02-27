'use strict';

import altFlux from '../altFlux';
import UserDataAPI from '../utils/api/UserDataAPI';
import ErrorToJSON from '../utils/serializers/ErrorToJSON';
import { userOnboardingCheck } from '../utils/checks/userStatusCheck';

class UserDataActions {
  constructor() {
    this.generateActions(
      'receiveUserData',
      'receiveUserDataError',
      'receiveUserOnboardingCheck'
    );
  }

  getUserData(params = { useCache: true }) {
    this.dispatch();

    let localData = UserDataAPI.getLocalUserData();

    if (localData && params.useCache) {
      this.actions.receiveUserData(localData);
    } else {
      UserDataAPI.getUserData().then((res) => {
        this.actions.receiveUserData(res.body.data);
      }).catch((err) => {
        let error = ErrorToJSON.superagent(err);
        this.actions.receiveUserDataError(error);
      });
    }
  }

  registrationCheck() {
    this.dispatch();

    UserDataAPI.getUserData().then((res) => {
      let response = res.body.data;
      if (userOnboardingCheck(response.status)) {
        this.actions.receiveUserOnboardingCheck('Your account is still pending. Contact your Manager to get access.');
      } else {
        this.actions.receiveUserData(response);
      }
    }).catch((err) => {
      console.log(err);
      let error = ErrorToJSON.superagent(err);
      this.actions.receiveUserDataError(error);
    });
  }
}

export default altFlux.createActions(UserDataActions);
