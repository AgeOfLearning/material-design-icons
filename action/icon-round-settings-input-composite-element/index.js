import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsInputCompositeElement
 * @class IconRoundSettingsInputCompositeElement
 * @extends {AoflElement}
 */
class IconRoundSettingsInputCompositeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsInputCompositeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-input-composite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsInputCompositeElement.is, IconRoundSettingsInputCompositeElement);

export default IconRoundSettingsInputCompositeElement;
