import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReplyAllElement
 * @class IconTwotoneReplyAllElement
 * @extends {AoflElement}
 */
class IconTwotoneReplyAllElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReplyAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-reply-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReplyAllElement.is, IconTwotoneReplyAllElement);

export default IconTwotoneReplyAllElement;
