import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBluetoothSearchingElement
 * @class IconSharpBluetoothSearchingElement
 * @extends {AoflElement}
 */
class IconSharpBluetoothSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBluetoothSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bluetooth-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBluetoothSearchingElement.is, IconSharpBluetoothSearchingElement);

export default IconSharpBluetoothSearchingElement;
