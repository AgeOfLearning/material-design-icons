import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineListElement
 * @class IconOutlineListElement
 * @extends {AoflElement}
 */
class IconOutlineListElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineListElement.is, IconOutlineListElement);

export default IconOutlineListElement;
