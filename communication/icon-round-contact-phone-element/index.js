import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundContactPhoneElement
 * @class IconRoundContactPhoneElement
 * @extends {AoflElement}
 */
class IconRoundContactPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundContactPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-contact-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundContactPhoneElement.is, IconRoundContactPhoneElement);

export default IconRoundContactPhoneElement;
