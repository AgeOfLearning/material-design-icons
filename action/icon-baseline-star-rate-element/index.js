import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStarRateElement
 * @class IconBaselineStarRateElement
 * @extends {AoflElement}
 */
class IconBaselineStarRateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStarRateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-star-rate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStarRateElement.is, IconBaselineStarRateElement);

export default IconBaselineStarRateElement;
