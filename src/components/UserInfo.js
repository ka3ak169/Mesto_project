export default class Userinfo {
  constructor( { name, activity } ) {
    this._dataName = name;
    this._dataInformation = activity;
    this._name = document.querySelector('.profile-popup-name');
    this._activity = document.querySelector('.profile-popup-activity');
  }

  getUserInfo() {
    return {
      name: this._dataName.textContent,
      link: this._dataInformation.textContent
    }
  }
  
  setUserInfo(data) {
    this._dataName.textContent = this._name.value;
    this._dataInformation.textContent = this._activity.value;
  }
}