import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVoiceChatElement
 * @class IconTwotoneVoiceChatElement
 * @extends {AoflElement}
 */
class IconTwotoneVoiceChatElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVoiceChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-voice-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVoiceChatElement.is, IconTwotoneVoiceChatElement);

export default IconTwotoneVoiceChatElement;
