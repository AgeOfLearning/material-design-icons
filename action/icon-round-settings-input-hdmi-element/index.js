import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsInputHdmiElement
 * @class IconRoundSettingsInputHdmiElement
 * @extends {AoflElement}
 */
class IconRoundSettingsInputHdmiElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsInputHdmiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-input-hdmi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsInputHdmiElement.is, IconRoundSettingsInputHdmiElement);

export default IconRoundSettingsInputHdmiElement;
