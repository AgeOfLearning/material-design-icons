import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsApplicationsElement
 * @class IconOutlineSettingsApplicationsElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsApplicationsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsApplicationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-applications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsApplicationsElement.is, IconOutlineSettingsApplicationsElement);

export default IconOutlineSettingsApplicationsElement;
