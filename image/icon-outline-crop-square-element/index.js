import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCropSquareElement
 * @class IconOutlineCropSquareElement
 * @extends {AoflElement}
 */
class IconOutlineCropSquareElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCropSquareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-square';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCropSquareElement.is, IconOutlineCropSquareElement);

export default IconOutlineCropSquareElement;
