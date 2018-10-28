import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBluetoothAudioElement
 * @class IconSharpBluetoothAudioElement
 * @extends {AoflElement}
 */
class IconSharpBluetoothAudioElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBluetoothAudioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bluetooth-audio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBluetoothAudioElement.is, IconSharpBluetoothAudioElement);

export default IconSharpBluetoothAudioElement;
