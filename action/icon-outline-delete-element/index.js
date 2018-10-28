import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDeleteElement
 * @class IconOutlineDeleteElement
 * @extends {AoflElement}
 */
class IconOutlineDeleteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDeleteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-delete';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDeleteElement.is, IconOutlineDeleteElement);

export default IconOutlineDeleteElement;
