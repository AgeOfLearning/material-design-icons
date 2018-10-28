import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifi4BarElement
 * @class IconSharpSignalWifi4BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifi4BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifi4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifi4BarElement.is, IconSharpSignalWifi4BarElement);

export default IconSharpSignalWifi4BarElement;
