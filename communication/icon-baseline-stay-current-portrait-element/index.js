import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStayCurrentPortraitElement
 * @class IconBaselineStayCurrentPortraitElement
 * @extends {AoflElement}
 */
class IconBaselineStayCurrentPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStayCurrentPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-stay-current-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStayCurrentPortraitElement.is, IconBaselineStayCurrentPortraitElement);

export default IconBaselineStayCurrentPortraitElement;
