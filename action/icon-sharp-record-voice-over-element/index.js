import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRecordVoiceOverElement
 * @class IconSharpRecordVoiceOverElement
 * @extends {AoflElement}
 */
class IconSharpRecordVoiceOverElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRecordVoiceOverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-record-voice-over';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRecordVoiceOverElement.is, IconSharpRecordVoiceOverElement);

export default IconSharpRecordVoiceOverElement;
