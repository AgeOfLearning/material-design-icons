import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStayCurrentLandscapeElement
 * @class IconBaselineStayCurrentLandscapeElement
 * @extends {AoflElement}
 */
class IconBaselineStayCurrentLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStayCurrentLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-stay-current-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStayCurrentLandscapeElement.is, IconBaselineStayCurrentLandscapeElement);

export default IconBaselineStayCurrentLandscapeElement;
