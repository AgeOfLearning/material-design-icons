import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBlurLinearElement
 * @class IconBaselineBlurLinearElement
 * @extends {AoflElement}
 */
class IconBaselineBlurLinearElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBlurLinearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-blur-linear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBlurLinearElement.is, IconBaselineBlurLinearElement);

export default IconBaselineBlurLinearElement;
