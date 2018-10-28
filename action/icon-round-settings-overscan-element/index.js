import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsOverscanElement
 * @class IconRoundSettingsOverscanElement
 * @extends {AoflElement}
 */
class IconRoundSettingsOverscanElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsOverscanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-overscan';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsOverscanElement.is, IconRoundSettingsOverscanElement);

export default IconRoundSettingsOverscanElement;
