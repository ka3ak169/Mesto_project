export default class Userinfo {
  constructor( { name, about, avatar} ) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }
  
  setUserInfo(  {name, about, avatar} ) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
  }
}