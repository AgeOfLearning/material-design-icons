import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter6Element
 * @class IconOutlineFilter6Element
 * @extends {AoflElement}
 */
class IconOutlineFilter6Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter6Element.is, IconOutlineFilter6Element);

export default IconOutlineFilter6Element;
