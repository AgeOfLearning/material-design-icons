import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi4BarElement
 * @class IconOutlineSignalWifi4BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi4BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi4BarElement.is, IconOutlineSignalWifi4BarElement);

export default IconOutlineSignalWifi4BarElement;
