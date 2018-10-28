import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsApplicationsElement
 * @class IconSharpSettingsApplicationsElement
 * @extends {AoflElement}
 */
class IconSharpSettingsApplicationsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsApplicationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-applications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsApplicationsElement.is, IconSharpSettingsApplicationsElement);

export default IconSharpSettingsApplicationsElement;
