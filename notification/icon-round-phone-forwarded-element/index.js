import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneForwardedElement
 * @class IconRoundPhoneForwardedElement
 * @extends {AoflElement}
 */
class IconRoundPhoneForwardedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneForwardedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-forwarded';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneForwardedElement.is, IconRoundPhoneForwardedElement);

export default IconRoundPhoneForwardedElement;
