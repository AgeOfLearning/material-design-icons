import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneBluetoothSpeakerElement
 * @class IconSharpPhoneBluetoothSpeakerElement
 * @extends {AoflElement}
 */
class IconSharpPhoneBluetoothSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneBluetoothSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-bluetooth-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneBluetoothSpeakerElement.is, IconSharpPhoneBluetoothSpeakerElement);

export default IconSharpPhoneBluetoothSpeakerElement;
