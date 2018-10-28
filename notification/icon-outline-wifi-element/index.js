import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWifiElement
 * @class IconOutlineWifiElement
 * @extends {AoflElement}
 */
class IconOutlineWifiElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWifiElement.is, IconOutlineWifiElement);

export default IconOutlineWifiElement;
