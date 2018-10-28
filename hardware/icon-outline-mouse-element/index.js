import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMouseElement
 * @class IconOutlineMouseElement
 * @extends {AoflElement}
 */
class IconOutlineMouseElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMouseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mouse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMouseElement.is, IconOutlineMouseElement);

export default IconOutlineMouseElement;
