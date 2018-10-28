import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChatBubbleElement
 * @class IconOutlineChatBubbleElement
 * @extends {AoflElement}
 */
class IconOutlineChatBubbleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChatBubbleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-chat-bubble';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChatBubbleElement.is, IconOutlineChatBubbleElement);

export default IconOutlineChatBubbleElement;
