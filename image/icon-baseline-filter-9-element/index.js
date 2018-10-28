import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter9Element
 * @class IconBaselineFilter9Element
 * @extends {AoflElement}
 */
class IconBaselineFilter9Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter9Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter9Element.is, IconBaselineFilter9Element);

export default IconBaselineFilter9Element;
