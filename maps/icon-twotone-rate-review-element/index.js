import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRateReviewElement
 * @class IconTwotoneRateReviewElement
 * @extends {AoflElement}
 */
class IconTwotoneRateReviewElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRateReviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-rate-review';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRateReviewElement.is, IconTwotoneRateReviewElement);

export default IconTwotoneRateReviewElement;
