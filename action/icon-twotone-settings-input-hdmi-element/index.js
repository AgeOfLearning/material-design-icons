import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsInputHdmiElement
 * @class IconTwotoneSettingsInputHdmiElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsInputHdmiElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsInputHdmiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-input-hdmi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsInputHdmiElement.is, IconTwotoneSettingsInputHdmiElement);

export default IconTwotoneSettingsInputHdmiElement;
