import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneBluetoothSpeakerElement
 * @class IconOutlinePhoneBluetoothSpeakerElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneBluetoothSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneBluetoothSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-bluetooth-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneBluetoothSpeakerElement.is, IconOutlinePhoneBluetoothSpeakerElement);

export default IconOutlinePhoneBluetoothSpeakerElement;
