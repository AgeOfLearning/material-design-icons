import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter3Element
 * @class IconBaselineFilter3Element
 * @extends {AoflElement}
 */
class IconBaselineFilter3Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter3Element.is, IconBaselineFilter3Element);

export default IconBaselineFilter3Element;
