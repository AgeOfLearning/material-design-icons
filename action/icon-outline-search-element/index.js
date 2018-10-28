import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSearchElement
 * @class IconOutlineSearchElement
 * @extends {AoflElement}
 */
class IconOutlineSearchElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSearchElement.is, IconOutlineSearchElement);

export default IconOutlineSearchElement;
