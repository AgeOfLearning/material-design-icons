import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundUsbElement
 * @class IconRoundUsbElement
 * @extends {AoflElement}
 */
class IconRoundUsbElement extends AoflElement {
  /**
   * Creates an instance of IconRoundUsbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-usb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundUsbElement.is, IconRoundUsbElement);

export default IconRoundUsbElement;
