import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneBluetoothSpeakerElement
 * @class IconRoundPhoneBluetoothSpeakerElement
 * @extends {AoflElement}
 */
class IconRoundPhoneBluetoothSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneBluetoothSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-bluetooth-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneBluetoothSpeakerElement.is, IconRoundPhoneBluetoothSpeakerElement);

export default IconRoundPhoneBluetoothSpeakerElement;
