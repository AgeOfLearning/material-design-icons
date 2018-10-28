import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowDropUpElement
 * @class IconBaselineArrowDropUpElement
 * @extends {AoflElement}
 */
class IconBaselineArrowDropUpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowDropUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-drop-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowDropUpElement.is, IconBaselineArrowDropUpElement);

export default IconBaselineArrowDropUpElement;
