import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowUpwardElement
 * @class IconBaselineArrowUpwardElement
 * @extends {AoflElement}
 */
class IconBaselineArrowUpwardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowUpwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-upward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowUpwardElement.is, IconBaselineArrowUpwardElement);

export default IconBaselineArrowUpwardElement;
