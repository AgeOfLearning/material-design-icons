import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePublicElement
 * @class IconOutlinePublicElement
 * @extends {AoflElement}
 */
class IconOutlinePublicElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePublicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-public';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePublicElement.is, IconOutlinePublicElement);

export default IconOutlinePublicElement;
