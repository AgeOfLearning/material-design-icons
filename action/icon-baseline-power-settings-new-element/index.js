import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePowerSettingsNewElement
 * @class IconBaselinePowerSettingsNewElement
 * @extends {AoflElement}
 */
class IconBaselinePowerSettingsNewElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePowerSettingsNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-power-settings-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePowerSettingsNewElement.is, IconBaselinePowerSettingsNewElement);

export default IconBaselinePowerSettingsNewElement;
