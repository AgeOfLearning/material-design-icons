import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsApplicationsElement
 * @class IconRoundSettingsApplicationsElement
 * @extends {AoflElement}
 */
class IconRoundSettingsApplicationsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsApplicationsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-applications';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsApplicationsElement.is, IconRoundSettingsApplicationsElement);

export default IconRoundSettingsApplicationsElement;
