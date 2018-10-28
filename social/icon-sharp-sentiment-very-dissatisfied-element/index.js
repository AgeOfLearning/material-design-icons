import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSentimentVeryDissatisfiedElement
 * @class IconSharpSentimentVeryDissatisfiedElement
 * @extends {AoflElement}
 */
class IconSharpSentimentVeryDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSentimentVeryDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sentiment-very-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSentimentVeryDissatisfiedElement.is, IconSharpSentimentVeryDissatisfiedElement);

export default IconSharpSentimentVeryDissatisfiedElement;
