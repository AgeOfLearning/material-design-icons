import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRecordVoiceOverElement
 * @class IconOutlineRecordVoiceOverElement
 * @extends {AoflElement}
 */
class IconOutlineRecordVoiceOverElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRecordVoiceOverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-record-voice-over';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRecordVoiceOverElement.is, IconOutlineRecordVoiceOverElement);

export default IconOutlineRecordVoiceOverElement;
