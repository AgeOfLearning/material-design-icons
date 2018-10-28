import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSentimentSatisfiedAltElement
 * @class IconTwotoneSentimentSatisfiedAltElement
 * @extends {AoflElement}
 */
class IconTwotoneSentimentSatisfiedAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSentimentSatisfiedAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sentiment-satisfied-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSentimentSatisfiedAltElement.is, IconTwotoneSentimentSatisfiedAltElement);

export default IconTwotoneSentimentSatisfiedAltElement;
