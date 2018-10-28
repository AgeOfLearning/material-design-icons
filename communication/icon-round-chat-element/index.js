import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChatElement
 * @class IconRoundChatElement
 * @extends {AoflElement}
 */
class IconRoundChatElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChatElement.is, IconRoundChatElement);

export default IconRoundChatElement;
