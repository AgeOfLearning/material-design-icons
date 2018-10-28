import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCommentElement
 * @class IconSharpCommentElement
 * @extends {AoflElement}
 */
class IconSharpCommentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCommentElement.is, IconSharpCommentElement);

export default IconSharpCommentElement;
