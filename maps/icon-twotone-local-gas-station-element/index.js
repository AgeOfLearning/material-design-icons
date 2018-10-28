import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalGasStationElement
 * @class IconTwotoneLocalGasStationElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalGasStationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalGasStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-gas-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalGasStationElement.is, IconTwotoneLocalGasStationElement);

export default IconTwotoneLocalGasStationElement;
