import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi2BarElement
 * @class IconBaselineSignalWifi2BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi2BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi2BarElement.is, IconBaselineSignalWifi2BarElement);

export default IconBaselineSignalWifi2BarElement;
