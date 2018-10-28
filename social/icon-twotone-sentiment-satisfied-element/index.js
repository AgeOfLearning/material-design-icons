import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSentimentSatisfiedElement
 * @class IconTwotoneSentimentSatisfiedElement
 * @extends {AoflElement}
 */
class IconTwotoneSentimentSatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSentimentSatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sentiment-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSentimentSatisfiedElement.is, IconTwotoneSentimentSatisfiedElement);

export default IconTwotoneSentimentSatisfiedElement;
