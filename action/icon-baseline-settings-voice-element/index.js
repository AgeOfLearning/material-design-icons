import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsVoiceElement
 * @class IconBaselineSettingsVoiceElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsVoiceElement.is, IconBaselineSettingsVoiceElement);

export default IconBaselineSettingsVoiceElement;
