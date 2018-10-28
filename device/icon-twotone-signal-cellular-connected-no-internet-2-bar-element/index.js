import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularConnectedNoInternet2BarElement
 * @class IconTwotoneSignalCellularConnectedNoInternet2BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularConnectedNoInternet2BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularConnectedNoInternet2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-connected-no-internet-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularConnectedNoInternet2BarElement.is, IconTwotoneSignalCellularConnectedNoInternet2BarElement);

export default IconTwotoneSignalCellularConnectedNoInternet2BarElement;
