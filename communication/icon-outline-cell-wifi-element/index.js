import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCellWifiElement
 * @class IconOutlineCellWifiElement
 * @extends {AoflElement}
 */
class IconOutlineCellWifiElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCellWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cell-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCellWifiElement.is, IconOutlineCellWifiElement);

export default IconOutlineCellWifiElement;
