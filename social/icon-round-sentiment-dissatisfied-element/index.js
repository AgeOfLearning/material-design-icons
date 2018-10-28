import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSentimentDissatisfiedElement
 * @class IconRoundSentimentDissatisfiedElement
 * @extends {AoflElement}
 */
class IconRoundSentimentDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSentimentDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sentiment-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSentimentDissatisfiedElement.is, IconRoundSentimentDissatisfiedElement);

export default IconRoundSentimentDissatisfiedElement;
