import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCollectionsElement
 * @class IconOutlineCollectionsElement
 * @extends {AoflElement}
 */
class IconOutlineCollectionsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCollectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-collections';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCollectionsElement.is, IconOutlineCollectionsElement);

export default IconOutlineCollectionsElement;
