export default class Userinfo {
  constructor( { name, activity } ) {
    this._name = document.querySelector(name);
    this._activity = document.querySelector(activity);
    // console.log(this._name.textContent, this._activity.textContent)
    // this._dataName = name;
    // this._dataInformation = activity;
    // this._name = document.querySelector('.profile-popup-name');
    // this._activity = document.querySelector('.profile-popup-activity');
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      link: this._activity.textContent
    }
  }
  
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._activity.textContent = data.link;
  }
}