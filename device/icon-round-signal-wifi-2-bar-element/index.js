import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi2BarElement
 * @class IconRoundSignalWifi2BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi2BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi2BarElement.is, IconRoundSignalWifi2BarElement);

export default IconRoundSignalWifi2BarElement;
