import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter2Element
 * @class IconBaselineFilter2Element
 * @extends {AoflElement}
 */
class IconBaselineFilter2Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter2Element.is, IconBaselineFilter2Element);

export default IconBaselineFilter2Element;
