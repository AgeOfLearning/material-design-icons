import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsBrightnessElement
 * @class IconOutlineSettingsBrightnessElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsBrightnessElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsBrightnessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-brightness';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsBrightnessElement.is, IconOutlineSettingsBrightnessElement);

export default IconOutlineSettingsBrightnessElement;
