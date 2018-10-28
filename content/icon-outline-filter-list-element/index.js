import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterListElement
 * @class IconOutlineFilterListElement
 * @extends {AoflElement}
 */
class IconOutlineFilterListElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterListElement.is, IconOutlineFilterListElement);

export default IconOutlineFilterListElement;
