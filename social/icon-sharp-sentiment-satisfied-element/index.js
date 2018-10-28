import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSentimentSatisfiedElement
 * @class IconSharpSentimentSatisfiedElement
 * @extends {AoflElement}
 */
class IconSharpSentimentSatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSentimentSatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sentiment-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSentimentSatisfiedElement.is, IconSharpSentimentSatisfiedElement);

export default IconSharpSentimentSatisfiedElement;
