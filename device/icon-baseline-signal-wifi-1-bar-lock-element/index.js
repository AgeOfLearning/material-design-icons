import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi1BarLockElement
 * @class IconBaselineSignalWifi1BarLockElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi1BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi1BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-1-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi1BarLockElement.is, IconBaselineSignalWifi1BarLockElement);

export default IconBaselineSignalWifi1BarLockElement;
