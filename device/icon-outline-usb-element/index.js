import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineUsbElement
 * @class IconOutlineUsbElement
 * @extends {AoflElement}
 */
class IconOutlineUsbElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineUsbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-usb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineUsbElement.is, IconOutlineUsbElement);

export default IconOutlineUsbElement;
