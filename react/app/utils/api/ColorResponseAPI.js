import { getAPI } from './BaseAPIUtils';

const GET_PATH = 'color';

class ColorResponseAPI {

  static getColorResponse() {
    return getAPI(GET_PATH);
  }
}

export default ColorResponseAPI;
