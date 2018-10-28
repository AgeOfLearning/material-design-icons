import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi3BarLockElement
 * @class IconSharpSignalWifi3BarLockElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi3BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi3BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-3-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi3BarLockElement.is, IconSharpSignalWifi3BarLockElement);

export default IconSharpSignalWifi3BarLockElement;
