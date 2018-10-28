import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRoundedCornerElement
 * @class IconOutlineRoundedCornerElement
 * @extends {AoflElement}
 */
class IconOutlineRoundedCornerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRoundedCornerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-rounded-corner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRoundedCornerElement.is, IconOutlineRoundedCornerElement);

export default IconOutlineRoundedCornerElement;
