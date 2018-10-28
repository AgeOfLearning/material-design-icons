import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCheckBoxOutlineBlankElement
 * @class IconBaselineCheckBoxOutlineBlankElement
 * @extends {AoflElement}
 */
class IconBaselineCheckBoxOutlineBlankElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCheckBoxOutlineBlankElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-check-box-outline-blank';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCheckBoxOutlineBlankElement.is, IconBaselineCheckBoxOutlineBlankElement);

export default IconBaselineCheckBoxOutlineBlankElement;
