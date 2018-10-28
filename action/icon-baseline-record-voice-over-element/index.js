import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRecordVoiceOverElement
 * @class IconBaselineRecordVoiceOverElement
 * @extends {AoflElement}
 */
class IconBaselineRecordVoiceOverElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRecordVoiceOverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-record-voice-over';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRecordVoiceOverElement.is, IconBaselineRecordVoiceOverElement);

export default IconBaselineRecordVoiceOverElement;
