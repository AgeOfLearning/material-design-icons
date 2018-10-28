import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneBluetoothSpeakerElement
 * @class IconTwotonePhoneBluetoothSpeakerElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneBluetoothSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneBluetoothSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-bluetooth-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneBluetoothSpeakerElement.is, IconTwotonePhoneBluetoothSpeakerElement);

export default IconTwotonePhoneBluetoothSpeakerElement;
