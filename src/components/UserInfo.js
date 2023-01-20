export default class Userinfo {
  constructor( { data }, ) {
    this._name = data.name;
    this._information = data.information;
  }

  getUserInfo() {
    return data
  }

  setUserInfo(newData) {
      this._name = newData.name;
      this._information = newData.information;
  }
}