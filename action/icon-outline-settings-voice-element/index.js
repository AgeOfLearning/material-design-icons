import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsVoiceElement
 * @class IconOutlineSettingsVoiceElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsVoiceElement.is, IconOutlineSettingsVoiceElement);

export default IconOutlineSettingsVoiceElement;
