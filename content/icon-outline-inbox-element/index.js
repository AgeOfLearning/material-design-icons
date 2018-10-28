import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInboxElement
 * @class IconOutlineInboxElement
 * @extends {AoflElement}
 */
class IconOutlineInboxElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInboxElement.is, IconOutlineInboxElement);

export default IconOutlineInboxElement;
