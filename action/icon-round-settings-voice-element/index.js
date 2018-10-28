import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsVoiceElement
 * @class IconRoundSettingsVoiceElement
 * @extends {AoflElement}
 */
class IconRoundSettingsVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsVoiceElement.is, IconRoundSettingsVoiceElement);

export default IconRoundSettingsVoiceElement;
