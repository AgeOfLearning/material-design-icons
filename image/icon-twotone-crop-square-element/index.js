import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCropSquareElement
 * @class IconTwotoneCropSquareElement
 * @extends {AoflElement}
 */
class IconTwotoneCropSquareElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCropSquareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-square';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCropSquareElement.is, IconTwotoneCropSquareElement);

export default IconTwotoneCropSquareElement;
