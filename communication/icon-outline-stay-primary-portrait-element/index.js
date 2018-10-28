import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStayPrimaryPortraitElement
 * @class IconOutlineStayPrimaryPortraitElement
 * @extends {AoflElement}
 */
class IconOutlineStayPrimaryPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStayPrimaryPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-stay-primary-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStayPrimaryPortraitElement.is, IconOutlineStayPrimaryPortraitElement);

export default IconOutlineStayPrimaryPortraitElement;
