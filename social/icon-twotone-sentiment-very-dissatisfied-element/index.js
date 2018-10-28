import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSentimentVeryDissatisfiedElement
 * @class IconTwotoneSentimentVeryDissatisfiedElement
 * @extends {AoflElement}
 */
class IconTwotoneSentimentVeryDissatisfiedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSentimentVeryDissatisfiedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sentiment-very-dissatisfied';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSentimentVeryDissatisfiedElement.is, IconTwotoneSentimentVeryDissatisfiedElement);

export default IconTwotoneSentimentVeryDissatisfiedElement;
