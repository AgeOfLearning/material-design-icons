import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineForward10Element
 * @class IconOutlineForward10Element
 * @extends {AoflElement}
 */
class IconOutlineForward10Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineForward10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-forward-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineForward10Element.is, IconOutlineForward10Element);

export default IconOutlineForward10Element;
