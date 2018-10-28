import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSortByAlphaElement
 * @class IconTwotoneSortByAlphaElement
 * @extends {AoflElement}
 */
class IconTwotoneSortByAlphaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSortByAlphaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sort-by-alpha';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSortByAlphaElement.is, IconTwotoneSortByAlphaElement);

export default IconTwotoneSortByAlphaElement;
