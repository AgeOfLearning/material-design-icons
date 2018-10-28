import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi2BarElement
 * @class IconSharpSignalWifi2BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi2BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi2BarElement.is, IconSharpSignalWifi2BarElement);

export default IconSharpSignalWifi2BarElement;
