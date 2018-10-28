import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVoiceChatElement
 * @class IconOutlineVoiceChatElement
 * @extends {AoflElement}
 */
class IconOutlineVoiceChatElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVoiceChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-voice-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVoiceChatElement.is, IconOutlineVoiceChatElement);

export default IconOutlineVoiceChatElement;
