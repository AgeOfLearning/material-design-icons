import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInsertCommentElement
 * @class IconOutlineInsertCommentElement
 * @extends {AoflElement}
 */
class IconOutlineInsertCommentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInsertCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-insert-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInsertCommentElement.is, IconOutlineInsertCommentElement);

export default IconOutlineInsertCommentElement;
