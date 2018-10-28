import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChatBubbleOutlineElement
 * @class IconSharpChatBubbleOutlineElement
 * @extends {AoflElement}
 */
class IconSharpChatBubbleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChatBubbleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-chat-bubble-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChatBubbleOutlineElement.is, IconSharpChatBubbleOutlineElement);

export default IconSharpChatBubbleOutlineElement;
