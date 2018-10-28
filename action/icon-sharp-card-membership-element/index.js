import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCardMembershipElement
 * @class IconSharpCardMembershipElement
 * @extends {AoflElement}
 */
class IconSharpCardMembershipElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCardMembershipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-card-membership';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCardMembershipElement.is, IconSharpCardMembershipElement);

export default IconSharpCardMembershipElement;
