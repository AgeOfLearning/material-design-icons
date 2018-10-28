import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsInputHdmiElement
 * @class IconOutlineSettingsInputHdmiElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsInputHdmiElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsInputHdmiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-input-hdmi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsInputHdmiElement.is, IconOutlineSettingsInputHdmiElement);

export default IconOutlineSettingsInputHdmiElement;
