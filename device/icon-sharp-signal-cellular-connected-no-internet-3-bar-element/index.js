import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularConnectedNoInternet3BarElement
 * @class IconSharpSignalCellularConnectedNoInternet3BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularConnectedNoInternet3BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularConnectedNoInternet3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-connected-no-internet-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularConnectedNoInternet3BarElement.is, IconSharpSignalCellularConnectedNoInternet3BarElement);

export default IconSharpSignalCellularConnectedNoInternet3BarElement;
