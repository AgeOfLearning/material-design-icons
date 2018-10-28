import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi1BarElement
 * @class IconSharpSignalWifi1BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi1BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi1BarElement.is, IconSharpSignalWifi1BarElement);

export default IconSharpSignalWifi1BarElement;
