import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWifiElement
 * @class IconTwotoneWifiElement
 * @extends {AoflElement}
 */
class IconTwotoneWifiElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWifiElement.is, IconTwotoneWifiElement);

export default IconTwotoneWifiElement;
