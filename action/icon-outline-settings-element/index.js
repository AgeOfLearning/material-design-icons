import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsElement
 * @class IconOutlineSettingsElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsElement.is, IconOutlineSettingsElement);

export default IconOutlineSettingsElement;
