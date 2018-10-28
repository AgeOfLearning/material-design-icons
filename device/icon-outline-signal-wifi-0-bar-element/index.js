import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi0BarElement
 * @class IconOutlineSignalWifi0BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi0BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi0BarElement.is, IconOutlineSignalWifi0BarElement);

export default IconOutlineSignalWifi0BarElement;
