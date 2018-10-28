import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVideoLibraryElement
 * @class IconOutlineVideoLibraryElement
 * @extends {AoflElement}
 */
class IconOutlineVideoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVideoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-video-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVideoLibraryElement.is, IconOutlineVideoLibraryElement);

export default IconOutlineVideoLibraryElement;
