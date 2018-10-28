import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowBackElement
 * @class IconBaselineArrowBackElement
 * @extends {AoflElement}
 */
class IconBaselineArrowBackElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowBackElement.is, IconBaselineArrowBackElement);

export default IconBaselineArrowBackElement;
