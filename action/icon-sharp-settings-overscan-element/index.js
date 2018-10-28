import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsOverscanElement
 * @class IconSharpSettingsOverscanElement
 * @extends {AoflElement}
 */
class IconSharpSettingsOverscanElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsOverscanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-overscan';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsOverscanElement.is, IconSharpSettingsOverscanElement);

export default IconSharpSettingsOverscanElement;
