import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPermDataSettingElement
 * @class IconSharpPermDataSettingElement
 * @extends {AoflElement}
 */
class IconSharpPermDataSettingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPermDataSettingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-perm-data-setting';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPermDataSettingElement.is, IconSharpPermDataSettingElement);

export default IconSharpPermDataSettingElement;
