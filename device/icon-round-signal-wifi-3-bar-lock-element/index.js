import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi3BarLockElement
 * @class IconRoundSignalWifi3BarLockElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi3BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi3BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-3-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi3BarLockElement.is, IconRoundSignalWifi3BarLockElement);

export default IconRoundSignalWifi3BarLockElement;
