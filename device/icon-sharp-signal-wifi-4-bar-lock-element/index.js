import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi4BarLockElement
 * @class IconSharpSignalWifi4BarLockElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi4BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi4BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-4-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi4BarLockElement.is, IconSharpSignalWifi4BarLockElement);

export default IconSharpSignalWifi4BarLockElement;
