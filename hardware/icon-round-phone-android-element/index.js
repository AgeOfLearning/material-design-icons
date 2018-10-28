import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneAndroidElement
 * @class IconRoundPhoneAndroidElement
 * @extends {AoflElement}
 */
class IconRoundPhoneAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneAndroidElement.is, IconRoundPhoneAndroidElement);

export default IconRoundPhoneAndroidElement;
