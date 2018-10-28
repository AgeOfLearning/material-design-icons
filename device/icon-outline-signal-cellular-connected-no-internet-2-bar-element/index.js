import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularConnectedNoInternet2BarElement
 * @class IconOutlineSignalCellularConnectedNoInternet2BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularConnectedNoInternet2BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularConnectedNoInternet2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-connected-no-internet-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularConnectedNoInternet2BarElement.is, IconOutlineSignalCellularConnectedNoInternet2BarElement);

export default IconOutlineSignalCellularConnectedNoInternet2BarElement;
