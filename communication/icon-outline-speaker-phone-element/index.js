import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSpeakerPhoneElement
 * @class IconOutlineSpeakerPhoneElement
 * @extends {AoflElement}
 */
class IconOutlineSpeakerPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSpeakerPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-speaker-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSpeakerPhoneElement.is, IconOutlineSpeakerPhoneElement);

export default IconOutlineSpeakerPhoneElement;
