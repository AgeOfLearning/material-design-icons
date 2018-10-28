import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsOverscanElement
 * @class IconBaselineSettingsOverscanElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsOverscanElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsOverscanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-overscan';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsOverscanElement.is, IconBaselineSettingsOverscanElement);

export default IconBaselineSettingsOverscanElement;
