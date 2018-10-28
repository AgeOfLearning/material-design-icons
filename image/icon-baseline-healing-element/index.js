import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHealingElement
 * @class IconBaselineHealingElement
 * @extends {AoflElement}
 */
class IconBaselineHealingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHealingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-healing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHealingElement.is, IconBaselineHealingElement);

export default IconBaselineHealingElement;
