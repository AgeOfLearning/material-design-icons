import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSentimentSatisfiedAltElement
 * @class IconSharpSentimentSatisfiedAltElement
 * @extends {AoflElement}
 */
class IconSharpSentimentSatisfiedAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSentimentSatisfiedAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sentiment-satisfied-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSentimentSatisfiedAltElement.is, IconSharpSentimentSatisfiedAltElement);

export default IconSharpSentimentSatisfiedAltElement;
