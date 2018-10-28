import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineUsbElement
 * @class IconBaselineUsbElement
 * @extends {AoflElement}
 */
class IconBaselineUsbElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineUsbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-usb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineUsbElement.is, IconBaselineUsbElement);

export default IconBaselineUsbElement;
