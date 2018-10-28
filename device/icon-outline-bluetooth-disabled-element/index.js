import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBluetoothDisabledElement
 * @class IconOutlineBluetoothDisabledElement
 * @extends {AoflElement}
 */
class IconOutlineBluetoothDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBluetoothDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bluetooth-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBluetoothDisabledElement.is, IconOutlineBluetoothDisabledElement);

export default IconOutlineBluetoothDisabledElement;
