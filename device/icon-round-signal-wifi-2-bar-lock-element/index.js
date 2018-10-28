import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi2BarLockElement
 * @class IconRoundSignalWifi2BarLockElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi2BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi2BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-2-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi2BarLockElement.is, IconRoundSignalWifi2BarLockElement);

export default IconRoundSignalWifi2BarLockElement;
