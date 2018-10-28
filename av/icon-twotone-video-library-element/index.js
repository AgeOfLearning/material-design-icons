import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVideoLibraryElement
 * @class IconTwotoneVideoLibraryElement
 * @extends {AoflElement}
 */
class IconTwotoneVideoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVideoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-video-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVideoLibraryElement.is, IconTwotoneVideoLibraryElement);

export default IconTwotoneVideoLibraryElement;
