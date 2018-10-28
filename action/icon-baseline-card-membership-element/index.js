import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCardMembershipElement
 * @class IconBaselineCardMembershipElement
 * @extends {AoflElement}
 */
class IconBaselineCardMembershipElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCardMembershipElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-card-membership';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCardMembershipElement.is, IconBaselineCardMembershipElement);

export default IconBaselineCardMembershipElement;
