import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpModeCommentElement
 * @class IconSharpModeCommentElement
 * @extends {AoflElement}
 */
class IconSharpModeCommentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpModeCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mode-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpModeCommentElement.is, IconSharpModeCommentElement);

export default IconSharpModeCommentElement;
