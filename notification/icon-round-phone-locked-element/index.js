import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneLockedElement
 * @class IconRoundPhoneLockedElement
 * @extends {AoflElement}
 */
class IconRoundPhoneLockedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneLockedElement.is, IconRoundPhoneLockedElement);

export default IconRoundPhoneLockedElement;
