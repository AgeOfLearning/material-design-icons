import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter7Element
 * @class IconOutlineFilter7Element
 * @extends {AoflElement}
 */
class IconOutlineFilter7Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter7Element.is, IconOutlineFilter7Element);

export default IconOutlineFilter7Element;
