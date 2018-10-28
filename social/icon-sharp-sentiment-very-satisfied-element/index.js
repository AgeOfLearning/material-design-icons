import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSentimentVerySatisfiedElement
 * @class IconSharpSentimentVerySatisfiedElement
 * @extends {AoflElement}
 */
class IconSharpSentimentVerySatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSentimentVerySatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sentiment-very-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSentimentVerySatisfiedElement.is, IconSharpSentimentVerySatisfiedElement);

export default IconSharpSentimentVerySatisfiedElement;
