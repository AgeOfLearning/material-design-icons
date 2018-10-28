import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRecordVoiceOverElement
 * @class IconRoundRecordVoiceOverElement
 * @extends {AoflElement}
 */
class IconRoundRecordVoiceOverElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRecordVoiceOverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-record-voice-over';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRecordVoiceOverElement.is, IconRoundRecordVoiceOverElement);

export default IconRoundRecordVoiceOverElement;
