import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneInTalkElement
 * @class IconSharpPhoneInTalkElement
 * @extends {AoflElement}
 */
class IconSharpPhoneInTalkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneInTalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-in-talk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneInTalkElement.is, IconSharpPhoneInTalkElement);

export default IconSharpPhoneInTalkElement;
