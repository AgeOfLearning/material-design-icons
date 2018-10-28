import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSmartphoneElement
 * @class IconOutlineSmartphoneElement
 * @extends {AoflElement}
 */
class IconOutlineSmartphoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSmartphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-smartphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSmartphoneElement.is, IconOutlineSmartphoneElement);

export default IconOutlineSmartphoneElement;
