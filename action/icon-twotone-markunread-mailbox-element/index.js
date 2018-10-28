import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMarkunreadMailboxElement
 * @class IconTwotoneMarkunreadMailboxElement
 * @extends {AoflElement}
 */
class IconTwotoneMarkunreadMailboxElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMarkunreadMailboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-markunread-mailbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMarkunreadMailboxElement.is, IconTwotoneMarkunreadMailboxElement);

export default IconTwotoneMarkunreadMailboxElement;
