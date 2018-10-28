import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSentimentSatisfiedAltElement
 * @class IconBaselineSentimentSatisfiedAltElement
 * @extends {AoflElement}
 */
class IconBaselineSentimentSatisfiedAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSentimentSatisfiedAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sentiment-satisfied-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSentimentSatisfiedAltElement.is, IconBaselineSentimentSatisfiedAltElement);

export default IconBaselineSentimentSatisfiedAltElement;
