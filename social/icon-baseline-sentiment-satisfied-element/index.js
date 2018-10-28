import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSentimentSatisfiedElement
 * @class IconBaselineSentimentSatisfiedElement
 * @extends {AoflElement}
 */
class IconBaselineSentimentSatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSentimentSatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sentiment-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSentimentSatisfiedElement.is, IconBaselineSentimentSatisfiedElement);

export default IconBaselineSentimentSatisfiedElement;
