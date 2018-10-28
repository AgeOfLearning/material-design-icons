import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddCommentElement
 * @class IconSharpAddCommentElement
 * @extends {AoflElement}
 */
class IconSharpAddCommentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddCommentElement.is, IconSharpAddCommentElement);

export default IconSharpAddCommentElement;
