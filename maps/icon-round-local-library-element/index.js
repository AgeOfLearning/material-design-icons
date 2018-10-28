import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalLibraryElement
 * @class IconRoundLocalLibraryElement
 * @extends {AoflElement}
 */
class IconRoundLocalLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalLibraryElement.is, IconRoundLocalLibraryElement);

export default IconRoundLocalLibraryElement;
