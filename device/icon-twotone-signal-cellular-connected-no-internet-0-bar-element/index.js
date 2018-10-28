import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularConnectedNoInternet0BarElement
 * @class IconTwotoneSignalCellularConnectedNoInternet0BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularConnectedNoInternet0BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularConnectedNoInternet0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-connected-no-internet-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularConnectedNoInternet0BarElement.is, IconTwotoneSignalCellularConnectedNoInternet0BarElement);

export default IconTwotoneSignalCellularConnectedNoInternet0BarElement;
