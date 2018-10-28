import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsElement
 * @class IconBaselineSettingsElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsElement.is, IconBaselineSettingsElement);

export default IconBaselineSettingsElement;
