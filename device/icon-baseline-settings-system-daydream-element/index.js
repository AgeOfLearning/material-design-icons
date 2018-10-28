import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsSystemDaydreamElement
 * @class IconBaselineSettingsSystemDaydreamElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsSystemDaydreamElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsSystemDaydreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-system-daydream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsSystemDaydreamElement.is, IconBaselineSettingsSystemDaydreamElement);

export default IconBaselineSettingsSystemDaydreamElement;
