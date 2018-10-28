import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRateReviewElement
 * @class IconRoundRateReviewElement
 * @extends {AoflElement}
 */
class IconRoundRateReviewElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRateReviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-rate-review';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRateReviewElement.is, IconRoundRateReviewElement);

export default IconRoundRateReviewElement;
