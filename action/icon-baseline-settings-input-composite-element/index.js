import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsInputCompositeElement
 * @class IconBaselineSettingsInputCompositeElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsInputCompositeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsInputCompositeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-input-composite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsInputCompositeElement.is, IconBaselineSettingsInputCompositeElement);

export default IconBaselineSettingsInputCompositeElement;
