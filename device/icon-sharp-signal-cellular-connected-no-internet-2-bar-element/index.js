import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularConnectedNoInternet2BarElement
 * @class IconSharpSignalCellularConnectedNoInternet2BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularConnectedNoInternet2BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularConnectedNoInternet2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-connected-no-internet-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularConnectedNoInternet2BarElement.is, IconSharpSignalCellularConnectedNoInternet2BarElement);

export default IconSharpSignalCellularConnectedNoInternet2BarElement;
