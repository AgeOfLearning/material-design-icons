import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsInputCompositeElement
 * @class IconOutlineSettingsInputCompositeElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsInputCompositeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsInputCompositeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-input-composite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsInputCompositeElement.is, IconOutlineSettingsInputCompositeElement);

export default IconOutlineSettingsInputCompositeElement;
