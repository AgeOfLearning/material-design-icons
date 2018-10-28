import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVerticalAlignBottomElement
 * @class IconBaselineVerticalAlignBottomElement
 * @extends {AoflElement}
 */
class IconBaselineVerticalAlignBottomElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVerticalAlignBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-vertical-align-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVerticalAlignBottomElement.is, IconBaselineVerticalAlignBottomElement);

export default IconBaselineVerticalAlignBottomElement;
