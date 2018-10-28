import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRoundedCornerElement
 * @class IconBaselineRoundedCornerElement
 * @extends {AoflElement}
 */
class IconBaselineRoundedCornerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRoundedCornerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-rounded-corner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRoundedCornerElement.is, IconBaselineRoundedCornerElement);

export default IconBaselineRoundedCornerElement;
