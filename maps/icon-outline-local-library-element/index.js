import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalLibraryElement
 * @class IconOutlineLocalLibraryElement
 * @extends {AoflElement}
 */
class IconOutlineLocalLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalLibraryElement.is, IconOutlineLocalLibraryElement);

export default IconOutlineLocalLibraryElement;
