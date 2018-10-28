import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSortByAlphaElement
 * @class IconSharpSortByAlphaElement
 * @extends {AoflElement}
 */
class IconSharpSortByAlphaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSortByAlphaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sort-by-alpha';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSortByAlphaElement.is, IconSharpSortByAlphaElement);

export default IconSharpSortByAlphaElement;
