import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter8Element
 * @class IconOutlineFilter8Element
 * @extends {AoflElement}
 */
class IconOutlineFilter8Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter8Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-8';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter8Element.is, IconOutlineFilter8Element);

export default IconOutlineFilter8Element;
