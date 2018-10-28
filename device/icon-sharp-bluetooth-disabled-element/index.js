import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBluetoothDisabledElement
 * @class IconSharpBluetoothDisabledElement
 * @extends {AoflElement}
 */
class IconSharpBluetoothDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBluetoothDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bluetooth-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBluetoothDisabledElement.is, IconSharpBluetoothDisabledElement);

export default IconSharpBluetoothDisabledElement;
