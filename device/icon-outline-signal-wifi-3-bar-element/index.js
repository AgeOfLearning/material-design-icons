import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi3BarElement
 * @class IconOutlineSignalWifi3BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi3BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi3BarElement.is, IconOutlineSignalWifi3BarElement);

export default IconOutlineSignalWifi3BarElement;
