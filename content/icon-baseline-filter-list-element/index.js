import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterListElement
 * @class IconBaselineFilterListElement
 * @extends {AoflElement}
 */
class IconBaselineFilterListElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterListElement.is, IconBaselineFilterListElement);

export default IconBaselineFilterListElement;
