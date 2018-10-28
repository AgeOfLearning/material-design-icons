import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineQuestionAnswerElement
 * @class IconOutlineQuestionAnswerElement
 * @extends {AoflElement}
 */
class IconOutlineQuestionAnswerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineQuestionAnswerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-question-answer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineQuestionAnswerElement.is, IconOutlineQuestionAnswerElement);

export default IconOutlineQuestionAnswerElement;
