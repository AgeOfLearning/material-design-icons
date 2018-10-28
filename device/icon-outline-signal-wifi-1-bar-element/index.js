import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi1BarElement
 * @class IconOutlineSignalWifi1BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi1BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi1BarElement.is, IconOutlineSignalWifi1BarElement);

export default IconOutlineSignalWifi1BarElement;
