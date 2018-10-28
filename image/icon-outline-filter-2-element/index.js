import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter2Element
 * @class IconOutlineFilter2Element
 * @extends {AoflElement}
 */
class IconOutlineFilter2Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter2Element.is, IconOutlineFilter2Element);

export default IconOutlineFilter2Element;
