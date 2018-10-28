import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMarkunreadMailboxElement
 * @class IconRoundMarkunreadMailboxElement
 * @extends {AoflElement}
 */
class IconRoundMarkunreadMailboxElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMarkunreadMailboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-markunread-mailbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMarkunreadMailboxElement.is, IconRoundMarkunreadMailboxElement);

export default IconRoundMarkunreadMailboxElement;
