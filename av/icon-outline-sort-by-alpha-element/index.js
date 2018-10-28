import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSortByAlphaElement
 * @class IconOutlineSortByAlphaElement
 * @extends {AoflElement}
 */
class IconOutlineSortByAlphaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSortByAlphaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sort-by-alpha';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSortByAlphaElement.is, IconOutlineSortByAlphaElement);

export default IconOutlineSortByAlphaElement;
