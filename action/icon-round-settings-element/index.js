import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsElement
 * @class IconRoundSettingsElement
 * @extends {AoflElement}
 */
class IconRoundSettingsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsElement.is, IconRoundSettingsElement);

export default IconRoundSettingsElement;
