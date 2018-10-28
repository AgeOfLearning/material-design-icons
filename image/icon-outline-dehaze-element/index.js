import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDehazeElement
 * @class IconOutlineDehazeElement
 * @extends {AoflElement}
 */
class IconOutlineDehazeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDehazeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-dehaze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDehazeElement.is, IconOutlineDehazeElement);

export default IconOutlineDehazeElement;
