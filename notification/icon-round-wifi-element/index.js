import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWifiElement
 * @class IconRoundWifiElement
 * @extends {AoflElement}
 */
class IconRoundWifiElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWifiElement.is, IconRoundWifiElement);

export default IconRoundWifiElement;
