import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi1BarLockElement
 * @class IconRoundSignalWifi1BarLockElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi1BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi1BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-1-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi1BarLockElement.is, IconRoundSignalWifi1BarLockElement);

export default IconRoundSignalWifi1BarLockElement;
