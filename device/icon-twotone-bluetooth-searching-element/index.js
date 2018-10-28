import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBluetoothSearchingElement
 * @class IconTwotoneBluetoothSearchingElement
 * @extends {AoflElement}
 */
class IconTwotoneBluetoothSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBluetoothSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bluetooth-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBluetoothSearchingElement.is, IconTwotoneBluetoothSearchingElement);

export default IconTwotoneBluetoothSearchingElement;
