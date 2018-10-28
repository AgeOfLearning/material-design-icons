import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowForwardElement
 * @class IconBaselineArrowForwardElement
 * @extends {AoflElement}
 */
class IconBaselineArrowForwardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowForwardElement.is, IconBaselineArrowForwardElement);

export default IconBaselineArrowForwardElement;
