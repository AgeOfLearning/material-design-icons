import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineForwardElement
 * @class IconOutlineForwardElement
 * @extends {AoflElement}
 */
class IconOutlineForwardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineForwardElement.is, IconOutlineForwardElement);

export default IconOutlineForwardElement;
