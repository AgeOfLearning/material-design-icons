import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi0BarElement
 * @class IconTwotoneSignalWifi0BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi0BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi0BarElement.is, IconTwotoneSignalWifi0BarElement);

export default IconTwotoneSignalWifi0BarElement;
