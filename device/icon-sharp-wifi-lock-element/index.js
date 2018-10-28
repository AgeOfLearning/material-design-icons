import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWifiLockElement
 * @class IconSharpWifiLockElement
 * @extends {AoflElement}
 */
class IconSharpWifiLockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWifiLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wifi-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWifiLockElement.is, IconSharpWifiLockElement);

export default IconSharpWifiLockElement;
