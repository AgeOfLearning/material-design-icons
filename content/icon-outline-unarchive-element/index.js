import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineUnarchiveElement
 * @class IconOutlineUnarchiveElement
 * @extends {AoflElement}
 */
class IconOutlineUnarchiveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineUnarchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-unarchive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineUnarchiveElement.is, IconOutlineUnarchiveElement);

export default IconOutlineUnarchiveElement;
