import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalGasStationElement
 * @class IconBaselineLocalGasStationElement
 * @extends {AoflElement}
 */
class IconBaselineLocalGasStationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalGasStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-gas-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalGasStationElement.is, IconBaselineLocalGasStationElement);

export default IconBaselineLocalGasStationElement;
