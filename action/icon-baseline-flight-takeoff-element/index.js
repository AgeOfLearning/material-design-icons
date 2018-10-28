import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlightTakeoffElement
 * @class IconBaselineFlightTakeoffElement
 * @extends {AoflElement}
 */
class IconBaselineFlightTakeoffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlightTakeoffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flight-takeoff';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlightTakeoffElement.is, IconBaselineFlightTakeoffElement);

export default IconBaselineFlightTakeoffElement;
