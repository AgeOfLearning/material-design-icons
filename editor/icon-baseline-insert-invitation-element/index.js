import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInsertInvitationElement
 * @class IconBaselineInsertInvitationElement
 * @extends {AoflElement}
 */
class IconBaselineInsertInvitationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInsertInvitationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-insert-invitation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInsertInvitationElement.is, IconBaselineInsertInvitationElement);

export default IconBaselineInsertInvitationElement;
