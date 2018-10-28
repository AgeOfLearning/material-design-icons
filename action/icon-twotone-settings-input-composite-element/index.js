import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsInputCompositeElement
 * @class IconTwotoneSettingsInputCompositeElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsInputCompositeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsInputCompositeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-input-composite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsInputCompositeElement.is, IconTwotoneSettingsInputCompositeElement);

export default IconTwotoneSettingsInputCompositeElement;
