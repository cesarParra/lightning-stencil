import { LightningElement, api } from 'lwc';

export default class Stencil extends LightningElement {
  @api height = 10;

  @api width;

  @api circle = false;

  @api count = 1;

  @api weightVariant = 'medium';

  get containerStyle() {
    return `${this.containerHeight}; ${this.containerWidth}; ${this.containerRadius}`;
  }

  get containerHeight() {
    return `height: ${this.height}px`;
  }

  get containerWidth() {
    if (!this.width) {
      return 'width: 100%';
    }

    return `width: ${this.width}px`;
  }

  get containerRadius() {
    if (!this.circle) {
      return 'border-radius: 0.25rem';
    }

    return 'border-radius: 50%';
  }

  get items() {
    let itemArray = [];
    for (let i = 0; i < this.count; i++) {
      itemArray.push(i.toString());
    }

    return itemArray;
  }

  get loadingBackgroundColor() {
    if (this.weightVariant === 'light') {
      return 'background-color: #f3f2f2';
    }

    if (this.weightVariant === 'medium') {
      return 'background-color: #e2e2e2';
    }

    if (this.weightVariant === 'dark') {
      return 'background-color: #ccc';
    }
  }
}