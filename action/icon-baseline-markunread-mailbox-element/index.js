import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMarkunreadMailboxElement
 * @class IconBaselineMarkunreadMailboxElement
 * @extends {AoflElement}
 */
class IconBaselineMarkunreadMailboxElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMarkunreadMailboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-markunread-mailbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMarkunreadMailboxElement.is, IconBaselineMarkunreadMailboxElement);

export default IconBaselineMarkunreadMailboxElement;
