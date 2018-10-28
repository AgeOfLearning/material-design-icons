import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAllInboxElement
 * @class IconOutlineAllInboxElement
 * @extends {AoflElement}
 */
class IconOutlineAllInboxElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAllInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-all-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAllInboxElement.is, IconOutlineAllInboxElement);

export default IconOutlineAllInboxElement;
