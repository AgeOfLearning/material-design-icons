import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterVintageElement
 * @class IconOutlineFilterVintageElement
 * @extends {AoflElement}
 */
class IconOutlineFilterVintageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterVintageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-vintage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterVintageElement.is, IconOutlineFilterVintageElement);

export default IconOutlineFilterVintageElement;
