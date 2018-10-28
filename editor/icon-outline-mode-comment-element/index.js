import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineModeCommentElement
 * @class IconOutlineModeCommentElement
 * @extends {AoflElement}
 */
class IconOutlineModeCommentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineModeCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mode-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineModeCommentElement.is, IconOutlineModeCommentElement);

export default IconOutlineModeCommentElement;
