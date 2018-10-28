import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSentimentDissatisfiedElement
 * @class IconSharpSentimentDissatisfiedElement
 * @extends {AoflElement}
 */
class IconSharpSentimentDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSentimentDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sentiment-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSentimentDissatisfiedElement.is, IconSharpSentimentDissatisfiedElement);

export default IconSharpSentimentDissatisfiedElement;
