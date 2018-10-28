import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInsertCommentElement
 * @class IconBaselineInsertCommentElement
 * @extends {AoflElement}
 */
class IconBaselineInsertCommentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInsertCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-insert-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInsertCommentElement.is, IconBaselineInsertCommentElement);

export default IconBaselineInsertCommentElement;
