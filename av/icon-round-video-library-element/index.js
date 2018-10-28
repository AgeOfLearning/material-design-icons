import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVideoLibraryElement
 * @class IconRoundVideoLibraryElement
 * @extends {AoflElement}
 */
class IconRoundVideoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVideoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-video-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVideoLibraryElement.is, IconRoundVideoLibraryElement);

export default IconRoundVideoLibraryElement;
