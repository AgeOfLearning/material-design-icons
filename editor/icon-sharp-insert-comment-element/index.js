import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInsertCommentElement
 * @class IconSharpInsertCommentElement
 * @extends {AoflElement}
 */
class IconSharpInsertCommentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInsertCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-insert-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInsertCommentElement.is, IconSharpInsertCommentElement);

export default IconSharpInsertCommentElement;
