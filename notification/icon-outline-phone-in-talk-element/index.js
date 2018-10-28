import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneInTalkElement
 * @class IconOutlinePhoneInTalkElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneInTalkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneInTalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-in-talk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneInTalkElement.is, IconOutlinePhoneInTalkElement);

export default IconOutlinePhoneInTalkElement;
