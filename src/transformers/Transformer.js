export class Transformer {
  static fetchCollection (items) {
    return items.map(item => this.fetch(item))
  }
}
