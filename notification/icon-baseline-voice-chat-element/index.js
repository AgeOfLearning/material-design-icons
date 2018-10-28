import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVoiceChatElement
 * @class IconBaselineVoiceChatElement
 * @extends {AoflElement}
 */
class IconBaselineVoiceChatElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVoiceChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-voice-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVoiceChatElement.is, IconBaselineVoiceChatElement);

export default IconBaselineVoiceChatElement;
