import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineQuestionAnswerElement
 * @class IconBaselineQuestionAnswerElement
 * @extends {AoflElement}
 */
class IconBaselineQuestionAnswerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineQuestionAnswerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-question-answer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineQuestionAnswerElement.is, IconBaselineQuestionAnswerElement);

export default IconBaselineQuestionAnswerElement;
