import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalGasStationElement
 * @class IconRoundLocalGasStationElement
 * @extends {AoflElement}
 */
class IconRoundLocalGasStationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalGasStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-gas-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalGasStationElement.is, IconRoundLocalGasStationElement);

export default IconRoundLocalGasStationElement;
