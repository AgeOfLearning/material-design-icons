import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRateReviewElement
 * @class IconSharpRateReviewElement
 * @extends {AoflElement}
 */
class IconSharpRateReviewElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRateReviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-rate-review';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRateReviewElement.is, IconSharpRateReviewElement);

export default IconSharpRateReviewElement;
