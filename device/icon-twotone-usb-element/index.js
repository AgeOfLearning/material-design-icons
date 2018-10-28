import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneUsbElement
 * @class IconTwotoneUsbElement
 * @extends {AoflElement}
 */
class IconTwotoneUsbElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneUsbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-usb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneUsbElement.is, IconTwotoneUsbElement);

export default IconTwotoneUsbElement;
