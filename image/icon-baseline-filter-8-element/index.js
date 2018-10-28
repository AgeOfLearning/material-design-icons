import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter8Element
 * @class IconBaselineFilter8Element
 * @extends {AoflElement}
 */
class IconBaselineFilter8Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter8Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-8';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter8Element.is, IconBaselineFilter8Element);

export default IconBaselineFilter8Element;
