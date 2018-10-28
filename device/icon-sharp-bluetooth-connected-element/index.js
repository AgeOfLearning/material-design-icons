import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBluetoothConnectedElement
 * @class IconSharpBluetoothConnectedElement
 * @extends {AoflElement}
 */
class IconSharpBluetoothConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBluetoothConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bluetooth-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBluetoothConnectedElement.is, IconSharpBluetoothConnectedElement);

export default IconSharpBluetoothConnectedElement;
