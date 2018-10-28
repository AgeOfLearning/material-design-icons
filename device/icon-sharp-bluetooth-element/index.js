import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBluetoothElement
 * @class IconSharpBluetoothElement
 * @extends {AoflElement}
 */
class IconSharpBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBluetoothElement.is, IconSharpBluetoothElement);

export default IconSharpBluetoothElement;
