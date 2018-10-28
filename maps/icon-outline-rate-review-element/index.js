import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRateReviewElement
 * @class IconOutlineRateReviewElement
 * @extends {AoflElement}
 */
class IconOutlineRateReviewElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRateReviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-rate-review';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRateReviewElement.is, IconOutlineRateReviewElement);

export default IconOutlineRateReviewElement;
