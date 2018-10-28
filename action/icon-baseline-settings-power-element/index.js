import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsPowerElement
 * @class IconBaselineSettingsPowerElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsPowerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsPowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsPowerElement.is, IconBaselineSettingsPowerElement);

export default IconBaselineSettingsPowerElement;
