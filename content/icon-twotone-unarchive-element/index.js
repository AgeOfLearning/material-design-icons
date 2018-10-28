import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneUnarchiveElement
 * @class IconTwotoneUnarchiveElement
 * @extends {AoflElement}
 */
class IconTwotoneUnarchiveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneUnarchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-unarchive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneUnarchiveElement.is, IconTwotoneUnarchiveElement);

export default IconTwotoneUnarchiveElement;
