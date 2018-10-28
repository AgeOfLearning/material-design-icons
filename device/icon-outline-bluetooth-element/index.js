import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBluetoothElement
 * @class IconOutlineBluetoothElement
 * @extends {AoflElement}
 */
class IconOutlineBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBluetoothElement.is, IconOutlineBluetoothElement);

export default IconOutlineBluetoothElement;
