import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChatBubbleOutlineElement
 * @class IconOutlineChatBubbleOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineChatBubbleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChatBubbleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-chat-bubble-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChatBubbleOutlineElement.is, IconOutlineChatBubbleOutlineElement);

export default IconOutlineChatBubbleOutlineElement;
