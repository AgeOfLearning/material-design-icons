import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVoiceChatElement
 * @class IconRoundVoiceChatElement
 * @extends {AoflElement}
 */
class IconRoundVoiceChatElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVoiceChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-voice-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVoiceChatElement.is, IconRoundVoiceChatElement);

export default IconRoundVoiceChatElement;
