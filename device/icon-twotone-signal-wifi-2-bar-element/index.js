import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi2BarElement
 * @class IconTwotoneSignalWifi2BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi2BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi2BarElement.is, IconTwotoneSignalWifi2BarElement);

export default IconTwotoneSignalWifi2BarElement;
