import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPermDataSettingElement
 * @class IconRoundPermDataSettingElement
 * @extends {AoflElement}
 */
class IconRoundPermDataSettingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPermDataSettingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-perm-data-setting';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPermDataSettingElement.is, IconRoundPermDataSettingElement);

export default IconRoundPermDataSettingElement;
