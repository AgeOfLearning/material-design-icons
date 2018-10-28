import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsPowerElement
 * @class IconOutlineSettingsPowerElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsPowerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsPowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsPowerElement.is, IconOutlineSettingsPowerElement);

export default IconOutlineSettingsPowerElement;
