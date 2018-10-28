import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTocElement
 * @class IconOutlineTocElement
 * @extends {AoflElement}
 */
class IconOutlineTocElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTocElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-toc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTocElement.is, IconOutlineTocElement);

export default IconOutlineTocElement;
