import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBluetoothConnectedElement
 * @class IconRoundBluetoothConnectedElement
 * @extends {AoflElement}
 */
class IconRoundBluetoothConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBluetoothConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bluetooth-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBluetoothConnectedElement.is, IconRoundBluetoothConnectedElement);

export default IconRoundBluetoothConnectedElement;
