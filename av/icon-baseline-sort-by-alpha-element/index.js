import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSortByAlphaElement
 * @class IconBaselineSortByAlphaElement
 * @extends {AoflElement}
 */
class IconBaselineSortByAlphaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSortByAlphaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sort-by-alpha';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSortByAlphaElement.is, IconBaselineSortByAlphaElement);

export default IconBaselineSortByAlphaElement;
