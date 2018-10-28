import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSentimentVeryDissatisfiedElement
 * @class IconRoundSentimentVeryDissatisfiedElement
 * @extends {AoflElement}
 */
class IconRoundSentimentVeryDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSentimentVeryDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sentiment-very-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSentimentVeryDissatisfiedElement.is, IconRoundSentimentVeryDissatisfiedElement);

export default IconRoundSentimentVeryDissatisfiedElement;
