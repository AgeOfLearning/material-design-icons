import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBluetoothConnectedElement
 * @class IconTwotoneBluetoothConnectedElement
 * @extends {AoflElement}
 */
class IconTwotoneBluetoothConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBluetoothConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bluetooth-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBluetoothConnectedElement.is, IconTwotoneBluetoothConnectedElement);

export default IconTwotoneBluetoothConnectedElement;
