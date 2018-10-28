import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsElement
 * @class IconSharpSettingsElement
 * @extends {AoflElement}
 */
class IconSharpSettingsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsElement.is, IconSharpSettingsElement);

export default IconSharpSettingsElement;
