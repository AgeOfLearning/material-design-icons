import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWcElement
 * @class IconOutlineWcElement
 * @extends {AoflElement}
 */
class IconOutlineWcElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWcElement.is, IconOutlineWcElement);

export default IconOutlineWcElement;
