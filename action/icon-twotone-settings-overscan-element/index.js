import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsOverscanElement
 * @class IconTwotoneSettingsOverscanElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsOverscanElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsOverscanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-overscan';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsOverscanElement.is, IconTwotoneSettingsOverscanElement);

export default IconTwotoneSettingsOverscanElement;
