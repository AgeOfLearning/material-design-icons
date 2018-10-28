import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter3Element
 * @class IconOutlineFilter3Element
 * @extends {AoflElement}
 */
class IconOutlineFilter3Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter3Element.is, IconOutlineFilter3Element);

export default IconOutlineFilter3Element;
