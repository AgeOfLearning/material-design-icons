import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsApplicationsElement
 * @class IconBaselineSettingsApplicationsElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsApplicationsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsApplicationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-applications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsApplicationsElement.is, IconBaselineSettingsApplicationsElement);

export default IconBaselineSettingsApplicationsElement;
