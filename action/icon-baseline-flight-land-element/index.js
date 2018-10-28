import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlightLandElement
 * @class IconBaselineFlightLandElement
 * @extends {AoflElement}
 */
class IconBaselineFlightLandElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlightLandElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flight-land';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlightLandElement.is, IconBaselineFlightLandElement);

export default IconBaselineFlightLandElement;
