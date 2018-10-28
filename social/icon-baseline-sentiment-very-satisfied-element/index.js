import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSentimentVerySatisfiedElement
 * @class IconBaselineSentimentVerySatisfiedElement
 * @extends {AoflElement}
 */
class IconBaselineSentimentVerySatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSentimentVerySatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sentiment-very-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSentimentVerySatisfiedElement.is, IconBaselineSentimentVerySatisfiedElement);

export default IconBaselineSentimentVerySatisfiedElement;
