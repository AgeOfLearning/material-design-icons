import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSentimentSatisfiedElement
 * @class IconRoundSentimentSatisfiedElement
 * @extends {AoflElement}
 */
class IconRoundSentimentSatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSentimentSatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sentiment-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSentimentSatisfiedElement.is, IconRoundSentimentSatisfiedElement);

export default IconRoundSentimentSatisfiedElement;
