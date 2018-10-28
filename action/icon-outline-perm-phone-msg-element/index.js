import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePermPhoneMsgElement
 * @class IconOutlinePermPhoneMsgElement
 * @extends {AoflElement}
 */
class IconOutlinePermPhoneMsgElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePermPhoneMsgElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-perm-phone-msg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePermPhoneMsgElement.is, IconOutlinePermPhoneMsgElement);

export default IconOutlinePermPhoneMsgElement;
