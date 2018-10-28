import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChatBubbleOutlineElement
 * @class IconRoundChatBubbleOutlineElement
 * @extends {AoflElement}
 */
class IconRoundChatBubbleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChatBubbleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-chat-bubble-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChatBubbleOutlineElement.is, IconRoundChatBubbleOutlineElement);

export default IconRoundChatBubbleOutlineElement;
