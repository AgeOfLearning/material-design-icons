import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStayPrimaryLandscapeElement
 * @class IconOutlineStayPrimaryLandscapeElement
 * @extends {AoflElement}
 */
class IconOutlineStayPrimaryLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStayPrimaryLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-stay-primary-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStayPrimaryLandscapeElement.is, IconOutlineStayPrimaryLandscapeElement);

export default IconOutlineStayPrimaryLandscapeElement;
