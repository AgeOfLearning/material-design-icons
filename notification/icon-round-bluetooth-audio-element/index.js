import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBluetoothAudioElement
 * @class IconRoundBluetoothAudioElement
 * @extends {AoflElement}
 */
class IconRoundBluetoothAudioElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBluetoothAudioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bluetooth-audio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBluetoothAudioElement.is, IconRoundBluetoothAudioElement);

export default IconRoundBluetoothAudioElement;
