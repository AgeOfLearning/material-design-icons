import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalLibraryElement
 * @class IconTwotoneLocalLibraryElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalLibraryElement.is, IconTwotoneLocalLibraryElement);

export default IconTwotoneLocalLibraryElement;
