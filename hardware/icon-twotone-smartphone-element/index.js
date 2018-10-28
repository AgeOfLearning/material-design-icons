import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSmartphoneElement
 * @class IconTwotoneSmartphoneElement
 * @extends {AoflElement}
 */
class IconTwotoneSmartphoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSmartphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-smartphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSmartphoneElement.is, IconTwotoneSmartphoneElement);

export default IconTwotoneSmartphoneElement;
