import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAcUnitElement
 * @class IconBaselineAcUnitElement
 * @extends {AoflElement}
 */
class IconBaselineAcUnitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAcUnitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-ac-unit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAcUnitElement.is, IconBaselineAcUnitElement);

export default IconBaselineAcUnitElement;
