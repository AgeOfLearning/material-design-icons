import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowBackIosElement
 * @class IconBaselineArrowBackIosElement
 * @extends {AoflElement}
 */
class IconBaselineArrowBackIosElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowBackIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-back-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowBackIosElement.is, IconBaselineArrowBackIosElement);

export default IconBaselineArrowBackIosElement;
