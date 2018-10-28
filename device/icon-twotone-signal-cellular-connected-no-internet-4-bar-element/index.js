import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularConnectedNoInternet4BarElement
 * @class IconTwotoneSignalCellularConnectedNoInternet4BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularConnectedNoInternet4BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularConnectedNoInternet4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-connected-no-internet-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularConnectedNoInternet4BarElement.is, IconTwotoneSignalCellularConnectedNoInternet4BarElement);

export default IconTwotoneSignalCellularConnectedNoInternet4BarElement;
