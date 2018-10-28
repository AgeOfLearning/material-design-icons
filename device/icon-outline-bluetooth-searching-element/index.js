import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBluetoothSearchingElement
 * @class IconOutlineBluetoothSearchingElement
 * @extends {AoflElement}
 */
class IconOutlineBluetoothSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBluetoothSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bluetooth-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBluetoothSearchingElement.is, IconOutlineBluetoothSearchingElement);

export default IconOutlineBluetoothSearchingElement;
