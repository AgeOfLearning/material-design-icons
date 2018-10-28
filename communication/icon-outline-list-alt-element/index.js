import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineListAltElement
 * @class IconOutlineListAltElement
 * @extends {AoflElement}
 */
class IconOutlineListAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineListAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-list-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineListAltElement.is, IconOutlineListAltElement);

export default IconOutlineListAltElement;
