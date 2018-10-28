import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi1BarElement
 * @class IconBaselineSignalWifi1BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi1BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi1BarElement.is, IconBaselineSignalWifi1BarElement);

export default IconBaselineSignalWifi1BarElement;
