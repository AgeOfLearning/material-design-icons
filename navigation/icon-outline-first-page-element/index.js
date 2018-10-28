import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFirstPageElement
 * @class IconOutlineFirstPageElement
 * @extends {AoflElement}
 */
class IconOutlineFirstPageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFirstPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-first-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFirstPageElement.is, IconOutlineFirstPageElement);

export default IconOutlineFirstPageElement;
