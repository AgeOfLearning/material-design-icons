import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsPowerElement
 * @class IconRoundSettingsPowerElement
 * @extends {AoflElement}
 */
class IconRoundSettingsPowerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsPowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsPowerElement.is, IconRoundSettingsPowerElement);

export default IconRoundSettingsPowerElement;
