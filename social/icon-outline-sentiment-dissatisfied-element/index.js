import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSentimentDissatisfiedElement
 * @class IconOutlineSentimentDissatisfiedElement
 * @extends {AoflElement}
 */
class IconOutlineSentimentDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSentimentDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sentiment-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSentimentDissatisfiedElement.is, IconOutlineSentimentDissatisfiedElement);

export default IconOutlineSentimentDissatisfiedElement;
