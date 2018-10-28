import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLinearScaleElement
 * @class IconBaselineLinearScaleElement
 * @extends {AoflElement}
 */
class IconBaselineLinearScaleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLinearScaleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-linear-scale';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLinearScaleElement.is, IconBaselineLinearScaleElement);

export default IconBaselineLinearScaleElement;
