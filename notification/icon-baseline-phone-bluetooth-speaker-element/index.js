import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneBluetoothSpeakerElement
 * @class IconBaselinePhoneBluetoothSpeakerElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneBluetoothSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneBluetoothSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-bluetooth-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneBluetoothSpeakerElement.is, IconBaselinePhoneBluetoothSpeakerElement);

export default IconBaselinePhoneBluetoothSpeakerElement;
