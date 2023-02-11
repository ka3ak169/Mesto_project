export default class Userinfo {
  constructor( { name, about, avatar, id } ) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this._id = id;
  }
  
  setUserInfo(  {name, about, avatar, _id} ) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
    this._id = _id;
  }
}