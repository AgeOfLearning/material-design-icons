import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsPowerElement
 * @class IconTwotoneSettingsPowerElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsPowerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsPowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsPowerElement.is, IconTwotoneSettingsPowerElement);

export default IconTwotoneSettingsPowerElement;
