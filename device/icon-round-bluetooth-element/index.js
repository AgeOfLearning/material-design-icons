import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBluetoothElement
 * @class IconRoundBluetoothElement
 * @extends {AoflElement}
 */
class IconRoundBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBluetoothElement.is, IconRoundBluetoothElement);

export default IconRoundBluetoothElement;
