import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsInputComponentElement
 * @class IconTwotoneSettingsInputComponentElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsInputComponentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsInputComponentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-input-component';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsInputComponentElement.is, IconTwotoneSettingsInputComponentElement);

export default IconTwotoneSettingsInputComponentElement;
