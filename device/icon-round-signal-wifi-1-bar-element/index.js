import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi1BarElement
 * @class IconRoundSignalWifi1BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi1BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi1BarElement.is, IconRoundSignalWifi1BarElement);

export default IconRoundSignalWifi1BarElement;
