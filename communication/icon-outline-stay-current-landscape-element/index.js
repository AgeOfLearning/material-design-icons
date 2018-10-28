import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStayCurrentLandscapeElement
 * @class IconOutlineStayCurrentLandscapeElement
 * @extends {AoflElement}
 */
class IconOutlineStayCurrentLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStayCurrentLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-stay-current-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStayCurrentLandscapeElement.is, IconOutlineStayCurrentLandscapeElement);

export default IconOutlineStayCurrentLandscapeElement;
