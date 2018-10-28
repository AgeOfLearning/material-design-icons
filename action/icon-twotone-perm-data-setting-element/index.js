import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePermDataSettingElement
 * @class IconTwotonePermDataSettingElement
 * @extends {AoflElement}
 */
class IconTwotonePermDataSettingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePermDataSettingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-perm-data-setting';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePermDataSettingElement.is, IconTwotonePermDataSettingElement);

export default IconTwotonePermDataSettingElement;
