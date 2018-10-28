import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBluetoothAudioElement
 * @class IconTwotoneBluetoothAudioElement
 * @extends {AoflElement}
 */
class IconTwotoneBluetoothAudioElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBluetoothAudioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bluetooth-audio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBluetoothAudioElement.is, IconTwotoneBluetoothAudioElement);

export default IconTwotoneBluetoothAudioElement;
