import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsInputHdmiElement
 * @class IconBaselineSettingsInputHdmiElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsInputHdmiElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsInputHdmiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-input-hdmi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsInputHdmiElement.is, IconBaselineSettingsInputHdmiElement);

export default IconBaselineSettingsInputHdmiElement;
