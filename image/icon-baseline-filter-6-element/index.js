import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter6Element
 * @class IconBaselineFilter6Element
 * @extends {AoflElement}
 */
class IconBaselineFilter6Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter6Element.is, IconBaselineFilter6Element);

export default IconBaselineFilter6Element;
