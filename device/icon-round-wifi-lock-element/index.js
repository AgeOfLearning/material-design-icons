import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWifiLockElement
 * @class IconRoundWifiLockElement
 * @extends {AoflElement}
 */
class IconRoundWifiLockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWifiLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wifi-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWifiLockElement.is, IconRoundWifiLockElement);

export default IconRoundWifiLockElement;
