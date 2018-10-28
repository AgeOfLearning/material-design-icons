import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneQuestionAnswerElement
 * @class IconTwotoneQuestionAnswerElement
 * @extends {AoflElement}
 */
class IconTwotoneQuestionAnswerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneQuestionAnswerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-question-answer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneQuestionAnswerElement.is, IconTwotoneQuestionAnswerElement);

export default IconTwotoneQuestionAnswerElement;
