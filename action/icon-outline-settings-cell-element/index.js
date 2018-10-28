import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsCellElement
 * @class IconOutlineSettingsCellElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsCellElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsCellElement.is, IconOutlineSettingsCellElement);

export default IconOutlineSettingsCellElement;
