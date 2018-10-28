import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi4BarLockElement
 * @class IconBaselineSignalWifi4BarLockElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi4BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi4BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-4-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi4BarLockElement.is, IconBaselineSignalWifi4BarLockElement);

export default IconBaselineSignalWifi4BarLockElement;
