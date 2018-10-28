import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBluetoothElement
 * @class IconTwotoneBluetoothElement
 * @extends {AoflElement}
 */
class IconTwotoneBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBluetoothElement.is, IconTwotoneBluetoothElement);

export default IconTwotoneBluetoothElement;
