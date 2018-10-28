import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi3BarElement
 * @class IconTwotoneSignalWifi3BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi3BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi3BarElement.is, IconTwotoneSignalWifi3BarElement);

export default IconTwotoneSignalWifi3BarElement;
