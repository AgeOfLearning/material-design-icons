import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVoiceOverOffElement
 * @class IconRoundVoiceOverOffElement
 * @extends {AoflElement}
 */
class IconRoundVoiceOverOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVoiceOverOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-voice-over-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVoiceOverOffElement.is, IconRoundVoiceOverOffElement);

export default IconRoundVoiceOverOffElement;
