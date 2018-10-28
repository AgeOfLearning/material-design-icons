import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSentimentSatisfiedAltElement
 * @class IconRoundSentimentSatisfiedAltElement
 * @extends {AoflElement}
 */
class IconRoundSentimentSatisfiedAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSentimentSatisfiedAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sentiment-satisfied-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSentimentSatisfiedAltElement.is, IconRoundSentimentSatisfiedAltElement);

export default IconRoundSentimentSatisfiedAltElement;
