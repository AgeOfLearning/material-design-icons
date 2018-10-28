import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBluetoothDisabledElement
 * @class IconTwotoneBluetoothDisabledElement
 * @extends {AoflElement}
 */
class IconTwotoneBluetoothDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBluetoothDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bluetooth-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBluetoothDisabledElement.is, IconTwotoneBluetoothDisabledElement);

export default IconTwotoneBluetoothDisabledElement;
