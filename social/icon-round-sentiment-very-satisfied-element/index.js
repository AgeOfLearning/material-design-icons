import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSentimentVerySatisfiedElement
 * @class IconRoundSentimentVerySatisfiedElement
 * @extends {AoflElement}
 */
class IconRoundSentimentVerySatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSentimentVerySatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sentiment-very-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSentimentVerySatisfiedElement.is, IconRoundSentimentVerySatisfiedElement);

export default IconRoundSentimentVerySatisfiedElement;
