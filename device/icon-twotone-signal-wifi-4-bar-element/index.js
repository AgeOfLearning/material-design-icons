import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi4BarElement
 * @class IconTwotoneSignalWifi4BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi4BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi4BarElement.is, IconTwotoneSignalWifi4BarElement);

export default IconTwotoneSignalWifi4BarElement;
