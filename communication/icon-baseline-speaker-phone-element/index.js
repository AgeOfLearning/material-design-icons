import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSpeakerPhoneElement
 * @class IconBaselineSpeakerPhoneElement
 * @extends {AoflElement}
 */
class IconBaselineSpeakerPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSpeakerPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-speaker-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSpeakerPhoneElement.is, IconBaselineSpeakerPhoneElement);

export default IconBaselineSpeakerPhoneElement;
