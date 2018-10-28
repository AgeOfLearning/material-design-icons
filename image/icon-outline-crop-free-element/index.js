import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCropFreeElement
 * @class IconOutlineCropFreeElement
 * @extends {AoflElement}
 */
class IconOutlineCropFreeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCropFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCropFreeElement.is, IconOutlineCropFreeElement);

export default IconOutlineCropFreeElement;
