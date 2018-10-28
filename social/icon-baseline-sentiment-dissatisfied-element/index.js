import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSentimentDissatisfiedElement
 * @class IconBaselineSentimentDissatisfiedElement
 * @extends {AoflElement}
 */
class IconBaselineSentimentDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSentimentDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sentiment-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSentimentDissatisfiedElement.is, IconBaselineSentimentDissatisfiedElement);

export default IconBaselineSentimentDissatisfiedElement;
