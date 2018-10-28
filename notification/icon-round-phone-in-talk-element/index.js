import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneInTalkElement
 * @class IconRoundPhoneInTalkElement
 * @extends {AoflElement}
 */
class IconRoundPhoneInTalkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneInTalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-in-talk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneInTalkElement.is, IconRoundPhoneInTalkElement);

export default IconRoundPhoneInTalkElement;
