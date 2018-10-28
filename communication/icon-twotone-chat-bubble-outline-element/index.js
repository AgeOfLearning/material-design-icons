import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChatBubbleOutlineElement
 * @class IconTwotoneChatBubbleOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneChatBubbleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChatBubbleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-chat-bubble-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChatBubbleOutlineElement.is, IconTwotoneChatBubbleOutlineElement);

export default IconTwotoneChatBubbleOutlineElement;
