import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHighQualityElement
 * @class IconBaselineHighQualityElement
 * @extends {AoflElement}
 */
class IconBaselineHighQualityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHighQualityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-high-quality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHighQualityElement.is, IconBaselineHighQualityElement);

export default IconBaselineHighQualityElement;
