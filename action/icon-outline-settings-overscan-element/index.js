import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsOverscanElement
 * @class IconOutlineSettingsOverscanElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsOverscanElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsOverscanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-overscan';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsOverscanElement.is, IconOutlineSettingsOverscanElement);

export default IconOutlineSettingsOverscanElement;
