import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlightElement
 * @class IconBaselineFlightElement
 * @extends {AoflElement}
 */
class IconBaselineFlightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlightElement.is, IconBaselineFlightElement);

export default IconBaselineFlightElement;
