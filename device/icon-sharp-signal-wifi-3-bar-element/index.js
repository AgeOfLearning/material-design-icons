import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi3BarElement
 * @class IconSharpSignalWifi3BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi3BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi3BarElement.is, IconSharpSignalWifi3BarElement);

export default IconSharpSignalWifi3BarElement;
