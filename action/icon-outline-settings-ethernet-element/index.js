import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsEthernetElement
 * @class IconOutlineSettingsEthernetElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsEthernetElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsEthernetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-ethernet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsEthernetElement.is, IconOutlineSettingsEthernetElement);

export default IconOutlineSettingsEthernetElement;
