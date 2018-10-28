import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMarkunreadMailboxElement
 * @class IconSharpMarkunreadMailboxElement
 * @extends {AoflElement}
 */
class IconSharpMarkunreadMailboxElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMarkunreadMailboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-markunread-mailbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMarkunreadMailboxElement.is, IconSharpMarkunreadMailboxElement);

export default IconSharpMarkunreadMailboxElement;
