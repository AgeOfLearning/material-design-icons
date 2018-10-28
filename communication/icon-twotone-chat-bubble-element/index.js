import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChatBubbleElement
 * @class IconTwotoneChatBubbleElement
 * @extends {AoflElement}
 */
class IconTwotoneChatBubbleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChatBubbleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-chat-bubble';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChatBubbleElement.is, IconTwotoneChatBubbleElement);

export default IconTwotoneChatBubbleElement;
