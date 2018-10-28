import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVerticalAlignCenterElement
 * @class IconBaselineVerticalAlignCenterElement
 * @extends {AoflElement}
 */
class IconBaselineVerticalAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVerticalAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-vertical-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVerticalAlignCenterElement.is, IconBaselineVerticalAlignCenterElement);

export default IconBaselineVerticalAlignCenterElement;
