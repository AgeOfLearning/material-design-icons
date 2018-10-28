import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLibraryMusicElement
 * @class IconBaselineLibraryMusicElement
 * @extends {AoflElement}
 */
class IconBaselineLibraryMusicElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLibraryMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-library-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLibraryMusicElement.is, IconBaselineLibraryMusicElement);

export default IconBaselineLibraryMusicElement;
