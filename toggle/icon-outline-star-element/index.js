import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStarElement
 * @class IconOutlineStarElement
 * @extends {AoflElement}
 */
class IconOutlineStarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-star';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStarElement.is, IconOutlineStarElement);

export default IconOutlineStarElement;
