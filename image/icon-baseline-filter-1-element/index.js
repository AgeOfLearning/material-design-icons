import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter1Element
 * @class IconBaselineFilter1Element
 * @extends {AoflElement}
 */
class IconBaselineFilter1Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter1Element.is, IconBaselineFilter1Element);

export default IconBaselineFilter1Element;
