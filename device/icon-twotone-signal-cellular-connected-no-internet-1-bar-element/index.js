import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularConnectedNoInternet1BarElement
 * @class IconTwotoneSignalCellularConnectedNoInternet1BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularConnectedNoInternet1BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularConnectedNoInternet1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-connected-no-internet-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularConnectedNoInternet1BarElement.is, IconTwotoneSignalCellularConnectedNoInternet1BarElement);

export default IconTwotoneSignalCellularConnectedNoInternet1BarElement;
