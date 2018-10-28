import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBluetoothConnectedElement
 * @class IconOutlineBluetoothConnectedElement
 * @extends {AoflElement}
 */
class IconOutlineBluetoothConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBluetoothConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bluetooth-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBluetoothConnectedElement.is, IconOutlineBluetoothConnectedElement);

export default IconOutlineBluetoothConnectedElement;
