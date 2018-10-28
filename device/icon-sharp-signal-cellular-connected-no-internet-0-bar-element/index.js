import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularConnectedNoInternet0BarElement
 * @class IconSharpSignalCellularConnectedNoInternet0BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularConnectedNoInternet0BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularConnectedNoInternet0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-connected-no-internet-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularConnectedNoInternet0BarElement.is, IconSharpSignalCellularConnectedNoInternet0BarElement);

export default IconSharpSignalCellularConnectedNoInternet0BarElement;
