import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBlurOffElement
 * @class IconBaselineBlurOffElement
 * @extends {AoflElement}
 */
class IconBaselineBlurOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBlurOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-blur-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBlurOffElement.is, IconBaselineBlurOffElement);

export default IconBaselineBlurOffElement;
