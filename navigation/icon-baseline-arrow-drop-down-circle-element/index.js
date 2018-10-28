import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowDropDownCircleElement
 * @class IconBaselineArrowDropDownCircleElement
 * @extends {AoflElement}
 */
class IconBaselineArrowDropDownCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowDropDownCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-drop-down-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowDropDownCircleElement.is, IconBaselineArrowDropDownCircleElement);

export default IconBaselineArrowDropDownCircleElement;
