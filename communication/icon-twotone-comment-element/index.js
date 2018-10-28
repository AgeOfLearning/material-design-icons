import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCommentElement
 * @class IconTwotoneCommentElement
 * @extends {AoflElement}
 */
class IconTwotoneCommentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCommentElement.is, IconTwotoneCommentElement);

export default IconTwotoneCommentElement;
