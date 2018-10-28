import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVoiceChatElement
 * @class IconSharpVoiceChatElement
 * @extends {AoflElement}
 */
class IconSharpVoiceChatElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVoiceChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-voice-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVoiceChatElement.is, IconSharpVoiceChatElement);

export default IconSharpVoiceChatElement;
