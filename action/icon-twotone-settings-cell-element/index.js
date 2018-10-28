import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsCellElement
 * @class IconTwotoneSettingsCellElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsCellElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsCellElement.is, IconTwotoneSettingsCellElement);

export default IconTwotoneSettingsCellElement;
