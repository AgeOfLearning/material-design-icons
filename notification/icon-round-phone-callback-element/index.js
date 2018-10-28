import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneCallbackElement
 * @class IconRoundPhoneCallbackElement
 * @extends {AoflElement}
 */
class IconRoundPhoneCallbackElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneCallbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-callback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneCallbackElement.is, IconRoundPhoneCallbackElement);

export default IconRoundPhoneCallbackElement;
