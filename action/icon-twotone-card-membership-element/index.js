import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCardMembershipElement
 * @class IconTwotoneCardMembershipElement
 * @extends {AoflElement}
 */
class IconTwotoneCardMembershipElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCardMembershipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-card-membership';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCardMembershipElement.is, IconTwotoneCardMembershipElement);

export default IconTwotoneCardMembershipElement;
