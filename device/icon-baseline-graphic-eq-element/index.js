import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGraphicEqElement
 * @class IconBaselineGraphicEqElement
 * @extends {AoflElement}
 */
class IconBaselineGraphicEqElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGraphicEqElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-graphic-eq';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGraphicEqElement.is, IconBaselineGraphicEqElement);

export default IconBaselineGraphicEqElement;
