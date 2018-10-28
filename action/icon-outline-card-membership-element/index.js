import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCardMembershipElement
 * @class IconOutlineCardMembershipElement
 * @extends {AoflElement}
 */
class IconOutlineCardMembershipElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCardMembershipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-card-membership';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCardMembershipElement.is, IconOutlineCardMembershipElement);

export default IconOutlineCardMembershipElement;
