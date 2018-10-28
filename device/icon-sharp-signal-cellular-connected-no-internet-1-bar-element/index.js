import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularConnectedNoInternet1BarElement
 * @class IconSharpSignalCellularConnectedNoInternet1BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularConnectedNoInternet1BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularConnectedNoInternet1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-connected-no-internet-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularConnectedNoInternet1BarElement.is, IconSharpSignalCellularConnectedNoInternet1BarElement);

export default IconSharpSignalCellularConnectedNoInternet1BarElement;
