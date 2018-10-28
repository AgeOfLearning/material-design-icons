import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi0BarElement
 * @class IconSharpSignalWifi0BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi0BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi0BarElement.is, IconSharpSignalWifi0BarElement);

export default IconSharpSignalWifi0BarElement;
