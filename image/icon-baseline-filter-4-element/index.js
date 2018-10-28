import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter4Element
 * @class IconBaselineFilter4Element
 * @extends {AoflElement}
 */
class IconBaselineFilter4Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter4Element.is, IconBaselineFilter4Element);

export default IconBaselineFilter4Element;
