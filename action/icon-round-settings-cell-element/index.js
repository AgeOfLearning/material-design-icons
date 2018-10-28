import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsCellElement
 * @class IconRoundSettingsCellElement
 * @extends {AoflElement}
 */
class IconRoundSettingsCellElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsCellElement.is, IconRoundSettingsCellElement);

export default IconRoundSettingsCellElement;
