import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRecordVoiceOverElement
 * @class IconTwotoneRecordVoiceOverElement
 * @extends {AoflElement}
 */
class IconTwotoneRecordVoiceOverElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRecordVoiceOverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-record-voice-over';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRecordVoiceOverElement.is, IconTwotoneRecordVoiceOverElement);

export default IconTwotoneRecordVoiceOverElement;
