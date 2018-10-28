import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAllInboxElement
 * @class IconTwotoneAllInboxElement
 * @extends {AoflElement}
 */
class IconTwotoneAllInboxElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAllInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-all-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAllInboxElement.is, IconTwotoneAllInboxElement);

export default IconTwotoneAllInboxElement;
