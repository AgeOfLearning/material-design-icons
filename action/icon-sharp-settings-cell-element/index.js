import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsCellElement
 * @class IconSharpSettingsCellElement
 * @extends {AoflElement}
 */
class IconSharpSettingsCellElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsCellElement.is, IconSharpSettingsCellElement);

export default IconSharpSettingsCellElement;
