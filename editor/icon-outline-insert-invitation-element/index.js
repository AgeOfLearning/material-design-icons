import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInsertInvitationElement
 * @class IconOutlineInsertInvitationElement
 * @extends {AoflElement}
 */
class IconOutlineInsertInvitationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInsertInvitationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-insert-invitation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInsertInvitationElement.is, IconOutlineInsertInvitationElement);

export default IconOutlineInsertInvitationElement;
