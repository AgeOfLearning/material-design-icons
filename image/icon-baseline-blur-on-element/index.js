import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBlurOnElement
 * @class IconBaselineBlurOnElement
 * @extends {AoflElement}
 */
class IconBaselineBlurOnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBlurOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-blur-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBlurOnElement.is, IconBaselineBlurOnElement);

export default IconBaselineBlurOnElement;
