import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHotTubElement
 * @class IconBaselineHotTubElement
 * @extends {AoflElement}
 */
class IconBaselineHotTubElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHotTubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hot-tub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHotTubElement.is, IconBaselineHotTubElement);

export default IconBaselineHotTubElement;
