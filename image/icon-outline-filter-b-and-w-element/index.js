import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterBAndWElement
 * @class IconOutlineFilterBAndWElement
 * @extends {AoflElement}
 */
class IconOutlineFilterBAndWElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterBAndWElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-b-and-w';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterBAndWElement.is, IconOutlineFilterBAndWElement);

export default IconOutlineFilterBAndWElement;
