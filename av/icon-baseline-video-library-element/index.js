import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVideoLibraryElement
 * @class IconBaselineVideoLibraryElement
 * @extends {AoflElement}
 */
class IconBaselineVideoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVideoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-video-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVideoLibraryElement.is, IconBaselineVideoLibraryElement);

export default IconBaselineVideoLibraryElement;
