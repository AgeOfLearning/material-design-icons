import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowRightElement
 * @class IconBaselineArrowRightElement
 * @extends {AoflElement}
 */
class IconBaselineArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowRightElement.is, IconBaselineArrowRightElement);

export default IconBaselineArrowRightElement;
