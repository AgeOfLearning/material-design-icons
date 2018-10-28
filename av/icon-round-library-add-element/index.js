import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLibraryAddElement
 * @class IconRoundLibraryAddElement
 * @extends {AoflElement}
 */
class IconRoundLibraryAddElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLibraryAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-library-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLibraryAddElement.is, IconRoundLibraryAddElement);

export default IconRoundLibraryAddElement;
