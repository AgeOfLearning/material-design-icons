import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSentimentVerySatisfiedElement
 * @class IconOutlineSentimentVerySatisfiedElement
 * @extends {AoflElement}
 */
class IconOutlineSentimentVerySatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSentimentVerySatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sentiment-very-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSentimentVerySatisfiedElement.is, IconOutlineSentimentVerySatisfiedElement);

export default IconOutlineSentimentVerySatisfiedElement;
