import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter7Element
 * @class IconBaselineFilter7Element
 * @extends {AoflElement}
 */
class IconBaselineFilter7Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter7Element.is, IconBaselineFilter7Element);

export default IconBaselineFilter7Element;
