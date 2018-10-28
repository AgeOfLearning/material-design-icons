import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsVoiceElement
 * @class IconSharpSettingsVoiceElement
 * @extends {AoflElement}
 */
class IconSharpSettingsVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsVoiceElement.is, IconSharpSettingsVoiceElement);

export default IconSharpSettingsVoiceElement;
