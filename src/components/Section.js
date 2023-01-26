export default class Section {
  constructor( { renderer }, containerSelector ) {
    // this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItem(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}