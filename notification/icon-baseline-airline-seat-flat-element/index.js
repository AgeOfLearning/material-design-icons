import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirlineSeatFlatElement
 * @class IconBaselineAirlineSeatFlatElement
 * @extends {AoflElement}
 */
class IconBaselineAirlineSeatFlatElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirlineSeatFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airline-seat-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirlineSeatFlatElement.is, IconBaselineAirlineSeatFlatElement);

export default IconBaselineAirlineSeatFlatElement;
