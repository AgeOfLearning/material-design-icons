import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChatBubbleElement
 * @class IconSharpChatBubbleElement
 * @extends {AoflElement}
 */
class IconSharpChatBubbleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChatBubbleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-chat-bubble';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChatBubbleElement.is, IconSharpChatBubbleElement);

export default IconSharpChatBubbleElement;
