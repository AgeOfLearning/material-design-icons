import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsElement
 * @class IconTwotoneSettingsElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsElement.is, IconTwotoneSettingsElement);

export default IconTwotoneSettingsElement;
