import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowRightAltElement
 * @class IconBaselineArrowRightAltElement
 * @extends {AoflElement}
 */
class IconBaselineArrowRightAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowRightAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-right-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowRightAltElement.is, IconBaselineArrowRightAltElement);

export default IconBaselineArrowRightAltElement;
