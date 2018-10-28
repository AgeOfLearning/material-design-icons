import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi1BarElement
 * @class IconTwotoneSignalWifi1BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi1BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi1BarElement.is, IconTwotoneSignalWifi1BarElement);

export default IconTwotoneSignalWifi1BarElement;
