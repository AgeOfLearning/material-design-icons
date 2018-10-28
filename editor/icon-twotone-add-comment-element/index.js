import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddCommentElement
 * @class IconTwotoneAddCommentElement
 * @extends {AoflElement}
 */
class IconTwotoneAddCommentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddCommentElement.is, IconTwotoneAddCommentElement);

export default IconTwotoneAddCommentElement;
