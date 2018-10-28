import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReplyAllElement
 * @class IconRoundReplyAllElement
 * @extends {AoflElement}
 */
class IconRoundReplyAllElement extends AoflElement {
  /**
   * Creates an instance of IconRoundReplyAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-reply-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReplyAllElement.is, IconRoundReplyAllElement);

export default IconRoundReplyAllElement;
