import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePermDataSettingElement
 * @class IconOutlinePermDataSettingElement
 * @extends {AoflElement}
 */
class IconOutlinePermDataSettingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePermDataSettingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-perm-data-setting';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePermDataSettingElement.is, IconOutlinePermDataSettingElement);

export default IconOutlinePermDataSettingElement;
