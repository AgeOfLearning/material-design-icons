import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpUsbElement
 * @class IconSharpUsbElement
 * @extends {AoflElement}
 */
class IconSharpUsbElement extends AoflElement {
  /**
   * Creates an instance of IconSharpUsbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-usb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpUsbElement.is, IconSharpUsbElement);

export default IconSharpUsbElement;
