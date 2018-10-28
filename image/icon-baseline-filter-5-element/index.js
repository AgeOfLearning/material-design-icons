import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter5Element
 * @class IconBaselineFilter5Element
 * @extends {AoflElement}
 */
class IconBaselineFilter5Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter5Element.is, IconBaselineFilter5Element);

export default IconBaselineFilter5Element;
