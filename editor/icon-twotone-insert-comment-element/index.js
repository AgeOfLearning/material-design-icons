import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInsertCommentElement
 * @class IconTwotoneInsertCommentElement
 * @extends {AoflElement}
 */
class IconTwotoneInsertCommentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInsertCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-insert-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInsertCommentElement.is, IconTwotoneInsertCommentElement);

export default IconTwotoneInsertCommentElement;
