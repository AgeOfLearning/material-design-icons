import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWifiElement
 * @class IconSharpWifiElement
 * @extends {AoflElement}
 */
class IconSharpWifiElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWifiElement.is, IconSharpWifiElement);

export default IconSharpWifiElement;
