import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCommentElement
 * @class IconOutlineCommentElement
 * @extends {AoflElement}
 */
class IconOutlineCommentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCommentElement.is, IconOutlineCommentElement);

export default IconOutlineCommentElement;
