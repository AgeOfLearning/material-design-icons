import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowForwardIosElement
 * @class IconBaselineArrowForwardIosElement
 * @extends {AoflElement}
 */
class IconBaselineArrowForwardIosElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowForwardIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-forward-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowForwardIosElement.is, IconBaselineArrowForwardIosElement);

export default IconBaselineArrowForwardIosElement;
