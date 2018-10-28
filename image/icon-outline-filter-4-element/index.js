import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter4Element
 * @class IconOutlineFilter4Element
 * @extends {AoflElement}
 */
class IconOutlineFilter4Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter4Element.is, IconOutlineFilter4Element);

export default IconOutlineFilter4Element;
