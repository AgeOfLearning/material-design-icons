import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDataUsageElement
 * @class IconBaselineDataUsageElement
 * @extends {AoflElement}
 */
class IconBaselineDataUsageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDataUsageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-data-usage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDataUsageElement.is, IconBaselineDataUsageElement);

export default IconBaselineDataUsageElement;
