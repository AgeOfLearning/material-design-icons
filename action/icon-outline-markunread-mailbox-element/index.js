import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMarkunreadMailboxElement
 * @class IconOutlineMarkunreadMailboxElement
 * @extends {AoflElement}
 */
class IconOutlineMarkunreadMailboxElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMarkunreadMailboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-markunread-mailbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMarkunreadMailboxElement.is, IconOutlineMarkunreadMailboxElement);

export default IconOutlineMarkunreadMailboxElement;
