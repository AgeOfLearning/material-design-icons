import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChatBubbleElement
 * @class IconRoundChatBubbleElement
 * @extends {AoflElement}
 */
class IconRoundChatBubbleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChatBubbleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-chat-bubble';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChatBubbleElement.is, IconRoundChatBubbleElement);

export default IconRoundChatBubbleElement;
