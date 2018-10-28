import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi2BarLockElement
 * @class IconSharpSignalWifi2BarLockElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi2BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi2BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-2-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi2BarLockElement.is, IconSharpSignalWifi2BarLockElement);

export default IconSharpSignalWifi2BarLockElement;
