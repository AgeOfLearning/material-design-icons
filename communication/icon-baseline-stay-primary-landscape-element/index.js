import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStayPrimaryLandscapeElement
 * @class IconBaselineStayPrimaryLandscapeElement
 * @extends {AoflElement}
 */
class IconBaselineStayPrimaryLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStayPrimaryLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-stay-primary-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStayPrimaryLandscapeElement.is, IconBaselineStayPrimaryLandscapeElement);

export default IconBaselineStayPrimaryLandscapeElement;
