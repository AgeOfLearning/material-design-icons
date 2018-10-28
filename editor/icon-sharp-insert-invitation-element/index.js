import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInsertInvitationElement
 * @class IconSharpInsertInvitationElement
 * @extends {AoflElement}
 */
class IconSharpInsertInvitationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInsertInvitationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-insert-invitation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInsertInvitationElement.is, IconSharpInsertInvitationElement);

export default IconSharpInsertInvitationElement;
