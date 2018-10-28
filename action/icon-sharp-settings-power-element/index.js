import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsPowerElement
 * @class IconSharpSettingsPowerElement
 * @extends {AoflElement}
 */
class IconSharpSettingsPowerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsPowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsPowerElement.is, IconSharpSettingsPowerElement);

export default IconSharpSettingsPowerElement;
