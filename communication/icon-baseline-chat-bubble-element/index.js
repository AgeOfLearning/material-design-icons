import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChatBubbleElement
 * @class IconBaselineChatBubbleElement
 * @extends {AoflElement}
 */
class IconBaselineChatBubbleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChatBubbleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-chat-bubble';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChatBubbleElement.is, IconBaselineChatBubbleElement);

export default IconBaselineChatBubbleElement;
