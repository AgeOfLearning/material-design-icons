import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneIphoneElement
 * @class IconRoundPhoneIphoneElement
 * @extends {AoflElement}
 */
class IconRoundPhoneIphoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneIphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-iphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneIphoneElement.is, IconRoundPhoneIphoneElement);

export default IconRoundPhoneIphoneElement;
