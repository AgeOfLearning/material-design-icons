import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterBAndWElement
 * @class IconBaselineFilterBAndWElement
 * @extends {AoflElement}
 */
class IconBaselineFilterBAndWElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterBAndWElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-b-and-w';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterBAndWElement.is, IconBaselineFilterBAndWElement);

export default IconBaselineFilterBAndWElement;
