import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsCellElement
 * @class IconBaselineSettingsCellElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsCellElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsCellElement.is, IconBaselineSettingsCellElement);

export default IconBaselineSettingsCellElement;
