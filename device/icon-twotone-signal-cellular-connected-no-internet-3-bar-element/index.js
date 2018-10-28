import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularConnectedNoInternet3BarElement
 * @class IconTwotoneSignalCellularConnectedNoInternet3BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularConnectedNoInternet3BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularConnectedNoInternet3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-connected-no-internet-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularConnectedNoInternet3BarElement.is, IconTwotoneSignalCellularConnectedNoInternet3BarElement);

export default IconTwotoneSignalCellularConnectedNoInternet3BarElement;
