import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReplyAllElement
 * @class IconOutlineReplyAllElement
 * @extends {AoflElement}
 */
class IconOutlineReplyAllElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineReplyAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-reply-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReplyAllElement.is, IconOutlineReplyAllElement);

export default IconOutlineReplyAllElement;
