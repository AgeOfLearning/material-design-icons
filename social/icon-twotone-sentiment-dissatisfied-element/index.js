import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSentimentDissatisfiedElement
 * @class IconTwotoneSentimentDissatisfiedElement
 * @extends {AoflElement}
 */
class IconTwotoneSentimentDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSentimentDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sentiment-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSentimentDissatisfiedElement.is, IconTwotoneSentimentDissatisfiedElement);

export default IconTwotoneSentimentDissatisfiedElement;
