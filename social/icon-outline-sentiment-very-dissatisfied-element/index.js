import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSentimentVeryDissatisfiedElement
 * @class IconOutlineSentimentVeryDissatisfiedElement
 * @extends {AoflElement}
 */
class IconOutlineSentimentVeryDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSentimentVeryDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sentiment-very-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSentimentVeryDissatisfiedElement.is, IconOutlineSentimentVeryDissatisfiedElement);

export default IconOutlineSentimentVeryDissatisfiedElement;
