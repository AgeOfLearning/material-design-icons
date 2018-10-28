import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsInputComponentElement
 * @class IconSharpSettingsInputComponentElement
 * @extends {AoflElement}
 */
class IconSharpSettingsInputComponentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsInputComponentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-input-component';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsInputComponentElement.is, IconSharpSettingsInputComponentElement);

export default IconSharpSettingsInputComponentElement;
