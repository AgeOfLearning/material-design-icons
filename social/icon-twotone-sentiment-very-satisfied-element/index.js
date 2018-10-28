import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSentimentVerySatisfiedElement
 * @class IconTwotoneSentimentVerySatisfiedElement
 * @extends {AoflElement}
 */
class IconTwotoneSentimentVerySatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSentimentVerySatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sentiment-very-satisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSentimentVerySatisfiedElement.is, IconTwotoneSentimentVerySatisfiedElement);

export default IconTwotoneSentimentVerySatisfiedElement;
