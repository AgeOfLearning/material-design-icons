import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi1BarLockElement
 * @class IconSharpSignalWifi1BarLockElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi1BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi1BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-1-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi1BarLockElement.is, IconSharpSignalWifi1BarLockElement);

export default IconSharpSignalWifi1BarLockElement;
