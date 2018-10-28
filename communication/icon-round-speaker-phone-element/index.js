import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSpeakerPhoneElement
 * @class IconRoundSpeakerPhoneElement
 * @extends {AoflElement}
 */
class IconRoundSpeakerPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSpeakerPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-speaker-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSpeakerPhoneElement.is, IconRoundSpeakerPhoneElement);

export default IconRoundSpeakerPhoneElement;
