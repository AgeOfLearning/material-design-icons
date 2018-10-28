import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSentimentSatisfiedElement
 * @class IconOutlineSentimentSatisfiedElement
 * @extends {AoflElement}
 */
class IconOutlineSentimentSatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSentimentSatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sentiment-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSentimentSatisfiedElement.is, IconOutlineSentimentSatisfiedElement);

export default IconOutlineSentimentSatisfiedElement;
