import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBluetoothAudioElement
 * @class IconOutlineBluetoothAudioElement
 * @extends {AoflElement}
 */
class IconOutlineBluetoothAudioElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBluetoothAudioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bluetooth-audio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBluetoothAudioElement.is, IconOutlineBluetoothAudioElement);

export default IconOutlineBluetoothAudioElement;
