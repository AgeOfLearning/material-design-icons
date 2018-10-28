import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInboxElement
 * @class IconTwotoneInboxElement
 * @extends {AoflElement}
 */
class IconTwotoneInboxElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInboxElement.is, IconTwotoneInboxElement);

export default IconTwotoneInboxElement;
