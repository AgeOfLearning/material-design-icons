import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSentimentVeryDissatisfiedElement
 * @class IconBaselineSentimentVeryDissatisfiedElement
 * @extends {AoflElement}
 */
class IconBaselineSentimentVeryDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSentimentVeryDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sentiment-very-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSentimentVeryDissatisfiedElement.is, IconBaselineSentimentVeryDissatisfiedElement);

export default IconBaselineSentimentVeryDissatisfiedElement;
