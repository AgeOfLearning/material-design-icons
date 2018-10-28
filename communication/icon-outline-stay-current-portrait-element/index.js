import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStayCurrentPortraitElement
 * @class IconOutlineStayCurrentPortraitElement
 * @extends {AoflElement}
 */
class IconOutlineStayCurrentPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStayCurrentPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-stay-current-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStayCurrentPortraitElement.is, IconOutlineStayCurrentPortraitElement);

export default IconOutlineStayCurrentPortraitElement;
