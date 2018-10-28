import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInsertInvitationElement
 * @class IconRoundInsertInvitationElement
 * @extends {AoflElement}
 */
class IconRoundInsertInvitationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInsertInvitationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-insert-invitation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInsertInvitationElement.is, IconRoundInsertInvitationElement);

export default IconRoundInsertInvitationElement;
