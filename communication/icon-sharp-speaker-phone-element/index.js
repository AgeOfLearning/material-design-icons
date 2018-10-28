import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSpeakerPhoneElement
 * @class IconSharpSpeakerPhoneElement
 * @extends {AoflElement}
 */
class IconSharpSpeakerPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSpeakerPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-speaker-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSpeakerPhoneElement.is, IconSharpSpeakerPhoneElement);

export default IconSharpSpeakerPhoneElement;
