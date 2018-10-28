import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowDropDownElement
 * @class IconBaselineArrowDropDownElement
 * @extends {AoflElement}
 */
class IconBaselineArrowDropDownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowDropDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-drop-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowDropDownElement.is, IconBaselineArrowDropDownElement);

export default IconBaselineArrowDropDownElement;
