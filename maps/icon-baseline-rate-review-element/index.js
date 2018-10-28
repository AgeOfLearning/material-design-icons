import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRateReviewElement
 * @class IconBaselineRateReviewElement
 * @extends {AoflElement}
 */
class IconBaselineRateReviewElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRateReviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-rate-review';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRateReviewElement.is, IconBaselineRateReviewElement);

export default IconBaselineRateReviewElement;
