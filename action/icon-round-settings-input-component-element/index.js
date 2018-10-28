import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsInputComponentElement
 * @class IconRoundSettingsInputComponentElement
 * @extends {AoflElement}
 */
class IconRoundSettingsInputComponentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsInputComponentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-input-component';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsInputComponentElement.is, IconRoundSettingsInputComponentElement);

export default IconRoundSettingsInputComponentElement;
