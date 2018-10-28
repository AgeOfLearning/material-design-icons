import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrokenImageElement
 * @class IconTwotoneBrokenImageElement
 * @extends {AoflElement}
 */
class IconTwotoneBrokenImageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrokenImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-broken-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrokenImageElement.is, IconTwotoneBrokenImageElement);

export default IconTwotoneBrokenImageElement;
