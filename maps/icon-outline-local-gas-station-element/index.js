import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalGasStationElement
 * @class IconOutlineLocalGasStationElement
 * @extends {AoflElement}
 */
class IconOutlineLocalGasStationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalGasStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-gas-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalGasStationElement.is, IconOutlineLocalGasStationElement);

export default IconOutlineLocalGasStationElement;
