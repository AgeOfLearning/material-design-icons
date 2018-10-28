import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSpeakerPhoneElement
 * @class IconTwotoneSpeakerPhoneElement
 * @extends {AoflElement}
 */
class IconTwotoneSpeakerPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSpeakerPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-speaker-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSpeakerPhoneElement.is, IconTwotoneSpeakerPhoneElement);

export default IconTwotoneSpeakerPhoneElement;
