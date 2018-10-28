import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAdjustElement
 * @class IconBaselineAdjustElement
 * @extends {AoflElement}
 */
class IconBaselineAdjustElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAdjustElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-adjust';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAdjustElement.is, IconBaselineAdjustElement);

export default IconBaselineAdjustElement;
