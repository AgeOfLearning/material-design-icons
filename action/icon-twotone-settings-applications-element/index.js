import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsApplicationsElement
 * @class IconTwotoneSettingsApplicationsElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsApplicationsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsApplicationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-applications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsApplicationsElement.is, IconTwotoneSettingsApplicationsElement);

export default IconTwotoneSettingsApplicationsElement;
