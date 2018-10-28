import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVideoLibraryElement
 * @class IconSharpVideoLibraryElement
 * @extends {AoflElement}
 */
class IconSharpVideoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVideoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-video-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVideoLibraryElement.is, IconSharpVideoLibraryElement);

export default IconSharpVideoLibraryElement;
