import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVerticalAlignTopElement
 * @class IconBaselineVerticalAlignTopElement
 * @extends {AoflElement}
 */
class IconBaselineVerticalAlignTopElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVerticalAlignTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-vertical-align-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVerticalAlignTopElement.is, IconBaselineVerticalAlignTopElement);

export default IconBaselineVerticalAlignTopElement;
