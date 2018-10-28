import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneInTalkElement
 * @class IconTwotonePhoneInTalkElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneInTalkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneInTalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-in-talk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneInTalkElement.is, IconTwotonePhoneInTalkElement);

export default IconTwotonePhoneInTalkElement;
