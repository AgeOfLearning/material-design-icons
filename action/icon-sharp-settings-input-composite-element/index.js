import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsInputCompositeElement
 * @class IconSharpSettingsInputCompositeElement
 * @extends {AoflElement}
 */
class IconSharpSettingsInputCompositeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsInputCompositeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-input-composite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsInputCompositeElement.is, IconSharpSettingsInputCompositeElement);

export default IconSharpSettingsInputCompositeElement;
