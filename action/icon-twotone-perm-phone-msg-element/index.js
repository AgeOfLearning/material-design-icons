import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePermPhoneMsgElement
 * @class IconTwotonePermPhoneMsgElement
 * @extends {AoflElement}
 */
class IconTwotonePermPhoneMsgElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePermPhoneMsgElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-perm-phone-msg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePermPhoneMsgElement.is, IconTwotonePermPhoneMsgElement);

export default IconTwotonePermPhoneMsgElement;
