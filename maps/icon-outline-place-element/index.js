import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlaceElement
 * @class IconOutlinePlaceElement
 * @extends {AoflElement}
 */
class IconOutlinePlaceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-place';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlaceElement.is, IconOutlinePlaceElement);

export default IconOutlinePlaceElement;
