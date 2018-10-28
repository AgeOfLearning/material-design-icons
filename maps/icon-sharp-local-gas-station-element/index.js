import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalGasStationElement
 * @class IconSharpLocalGasStationElement
 * @extends {AoflElement}
 */
class IconSharpLocalGasStationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalGasStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-gas-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalGasStationElement.is, IconSharpLocalGasStationElement);

export default IconSharpLocalGasStationElement;
