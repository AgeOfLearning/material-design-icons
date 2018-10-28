import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInsertInvitationElement
 * @class IconTwotoneInsertInvitationElement
 * @extends {AoflElement}
 */
class IconTwotoneInsertInvitationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInsertInvitationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-insert-invitation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInsertInvitationElement.is, IconTwotoneInsertInvitationElement);

export default IconTwotoneInsertInvitationElement;
