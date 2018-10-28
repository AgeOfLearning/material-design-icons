import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsInputAntennaElement
 * @class IconSharpSettingsInputAntennaElement
 * @extends {AoflElement}
 */
class IconSharpSettingsInputAntennaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsInputAntennaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-input-antenna';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsInputAntennaElement.is, IconSharpSettingsInputAntennaElement);

export default IconSharpSettingsInputAntennaElement;
