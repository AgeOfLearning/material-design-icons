import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReplyAllElement
 * @class IconSharpReplyAllElement
 * @extends {AoflElement}
 */
class IconSharpReplyAllElement extends AoflElement {
  /**
   * Creates an instance of IconSharpReplyAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-reply-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReplyAllElement.is, IconSharpReplyAllElement);

export default IconSharpReplyAllElement;
