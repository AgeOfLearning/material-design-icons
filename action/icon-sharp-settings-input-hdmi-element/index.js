import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsInputHdmiElement
 * @class IconSharpSettingsInputHdmiElement
 * @extends {AoflElement}
 */
class IconSharpSettingsInputHdmiElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsInputHdmiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-input-hdmi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsInputHdmiElement.is, IconSharpSettingsInputHdmiElement);

export default IconSharpSettingsInputHdmiElement;
