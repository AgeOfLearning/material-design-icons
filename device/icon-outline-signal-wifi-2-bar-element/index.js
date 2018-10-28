import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi2BarElement
 * @class IconOutlineSignalWifi2BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi2BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi2BarElement.is, IconOutlineSignalWifi2BarElement);

export default IconOutlineSignalWifi2BarElement;
