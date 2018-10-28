import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChatBubbleOutlineElement
 * @class IconBaselineChatBubbleOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineChatBubbleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChatBubbleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-chat-bubble-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChatBubbleOutlineElement.is, IconBaselineChatBubbleOutlineElement);

export default IconBaselineChatBubbleOutlineElement;
