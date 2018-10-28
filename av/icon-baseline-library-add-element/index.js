import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLibraryAddElement
 * @class IconBaselineLibraryAddElement
 * @extends {AoflElement}
 */
class IconBaselineLibraryAddElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLibraryAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-library-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLibraryAddElement.is, IconBaselineLibraryAddElement);

export default IconBaselineLibraryAddElement;
