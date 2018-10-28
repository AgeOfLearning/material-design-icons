import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundQuestionAnswerElement
 * @class IconRoundQuestionAnswerElement
 * @extends {AoflElement}
 */
class IconRoundQuestionAnswerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundQuestionAnswerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-question-answer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundQuestionAnswerElement.is, IconRoundQuestionAnswerElement);

export default IconRoundQuestionAnswerElement;
