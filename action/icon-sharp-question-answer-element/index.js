import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpQuestionAnswerElement
 * @class IconSharpQuestionAnswerElement
 * @extends {AoflElement}
 */
class IconSharpQuestionAnswerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpQuestionAnswerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-question-answer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpQuestionAnswerElement.is, IconSharpQuestionAnswerElement);

export default IconSharpQuestionAnswerElement;
