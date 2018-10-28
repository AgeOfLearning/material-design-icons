import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter9Element
 * @class IconOutlineFilter9Element
 * @extends {AoflElement}
 */
class IconOutlineFilter9Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter9Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter9Element.is, IconOutlineFilter9Element);

export default IconOutlineFilter9Element;
