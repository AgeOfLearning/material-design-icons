import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi4BarLockElement
 * @class IconRoundSignalWifi4BarLockElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi4BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi4BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-4-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi4BarLockElement.is, IconRoundSignalWifi4BarLockElement);

export default IconRoundSignalWifi4BarLockElement;
