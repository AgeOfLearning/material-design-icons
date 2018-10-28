import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsInputAntennaElement
 * @class IconTwotoneSettingsInputAntennaElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsInputAntennaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsInputAntennaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-input-antenna';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsInputAntennaElement.is, IconTwotoneSettingsInputAntennaElement);

export default IconTwotoneSettingsInputAntennaElement;
