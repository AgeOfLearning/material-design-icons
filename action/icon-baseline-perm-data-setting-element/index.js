import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePermDataSettingElement
 * @class IconBaselinePermDataSettingElement
 * @extends {AoflElement}
 */
class IconBaselinePermDataSettingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePermDataSettingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-perm-data-setting';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePermDataSettingElement.is, IconBaselinePermDataSettingElement);

export default IconBaselinePermDataSettingElement;
