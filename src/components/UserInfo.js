export default class Userinfo {
  constructor( { name, activity } ) {
    this._dataName = name;
    this._dataInformation = activity;
    this._name = document.querySelector('.profile-popup-name');
    this._activity = document.querySelector('.profile-popup-activity');
    // console.log(this._dataName.value, this._dataInformation.value)
  }

  getUserInfo() {
    return {
      name: this._dataName.textContent,
      link: this._dataInformation.textContent
    }
  }


  setUserInfo(data) {
    // const data = this.getUserInfo();
    console.log(data);
    console.log(this._dataName, this._dataInformation);
    console.log(this._name.value, this._activity.value);
    this._name.value = this._dataName.textContent;
    this._activity.value = this._dataInformation.textContent; 

    // console.log(this.getUserInfo)
    // this._name.value = getUserInfo.name;
    // this._activity.value = getUserInfo.link
  }
}