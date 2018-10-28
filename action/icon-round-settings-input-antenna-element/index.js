import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsInputAntennaElement
 * @class IconRoundSettingsInputAntennaElement
 * @extends {AoflElement}
 */
class IconRoundSettingsInputAntennaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsInputAntennaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-input-antenna';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsInputAntennaElement.is, IconRoundSettingsInputAntennaElement);

export default IconRoundSettingsInputAntennaElement;
