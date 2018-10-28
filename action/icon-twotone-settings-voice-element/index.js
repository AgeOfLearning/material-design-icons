import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsVoiceElement
 * @class IconTwotoneSettingsVoiceElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsVoiceElement.is, IconTwotoneSettingsVoiceElement);

export default IconTwotoneSettingsVoiceElement;
