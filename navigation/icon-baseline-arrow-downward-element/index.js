import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowDownwardElement
 * @class IconBaselineArrowDownwardElement
 * @extends {AoflElement}
 */
class IconBaselineArrowDownwardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowDownwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-downward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowDownwardElement.is, IconBaselineArrowDownwardElement);

export default IconBaselineArrowDownwardElement;
