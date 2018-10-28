import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMenuElement
 * @class IconOutlineMenuElement
 * @extends {AoflElement}
 */
class IconOutlineMenuElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMenuElement.is, IconOutlineMenuElement);

export default IconOutlineMenuElement;
