export default class Section {
  constructor( { items, renderer}, containerSelector ) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItem() {
    console.log(typeof this._items);
    console.log(this._container);
    console.log(this._renderer);

    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}