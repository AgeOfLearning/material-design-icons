import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCloseElement
 * @class IconOutlineCloseElement
 * @extends {AoflElement}
 */
class IconOutlineCloseElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCloseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-close';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCloseElement.is, IconOutlineCloseElement);

export default IconOutlineCloseElement;
