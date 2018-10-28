import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsBrightnessElement
 * @class IconBaselineSettingsBrightnessElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsBrightnessElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsBrightnessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-brightness';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsBrightnessElement.is, IconBaselineSettingsBrightnessElement);

export default IconBaselineSettingsBrightnessElement;
