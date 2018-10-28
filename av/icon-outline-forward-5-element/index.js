import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineForward5Element
 * @class IconOutlineForward5Element
 * @extends {AoflElement}
 */
class IconOutlineForward5Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineForward5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-forward-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineForward5Element.is, IconOutlineForward5Element);

export default IconOutlineForward5Element;
