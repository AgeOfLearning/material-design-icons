import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCardMembershipElement
 * @class IconRoundCardMembershipElement
 * @extends {AoflElement}
 */
class IconRoundCardMembershipElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCardMembershipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-card-membership';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCardMembershipElement.is, IconRoundCardMembershipElement);

export default IconRoundCardMembershipElement;
