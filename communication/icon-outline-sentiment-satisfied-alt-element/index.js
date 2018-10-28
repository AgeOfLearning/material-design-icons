import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSentimentSatisfiedAltElement
 * @class IconOutlineSentimentSatisfiedAltElement
 * @extends {AoflElement}
 */
class IconOutlineSentimentSatisfiedAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSentimentSatisfiedAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sentiment-satisfied-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSentimentSatisfiedAltElement.is, IconOutlineSentimentSatisfiedAltElement);

export default IconOutlineSentimentSatisfiedAltElement;
