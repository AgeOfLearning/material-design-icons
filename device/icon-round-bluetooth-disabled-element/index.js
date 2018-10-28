import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBluetoothDisabledElement
 * @class IconRoundBluetoothDisabledElement
 * @extends {AoflElement}
 */
class IconRoundBluetoothDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBluetoothDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bluetooth-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBluetoothDisabledElement.is, IconRoundBluetoothDisabledElement);

export default IconRoundBluetoothDisabledElement;
