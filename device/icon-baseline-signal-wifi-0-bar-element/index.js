import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi0BarElement
 * @class IconBaselineSignalWifi0BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi0BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi0BarElement.is, IconBaselineSignalWifi0BarElement);

export default IconBaselineSignalWifi0BarElement;
